import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';
import ReactDOM from 'react-dom/server';
import { chromium } from 'playwright';
import { client } from 'framework/potato/client';
import { Level } from 'framework/potato/api/@types';
import OGPImage from 'components/Card/OGPImage';
import crypto from 'crypto';

export default async function ogp(req: Req, res: Res) {
  const id = (req.query.id || '').toString();

  if (id === '' || req.method !== 'GET') return res.status(400).send('Bad request');

  // 後で修正するクソコード(APIの修正が必要)
  let level: Level;
  try {
    const res = await client.levels._levelName(`${id}`).get();

    if (res.status !== 200) {
      return {
        notFound: true,
      };
    }

    level = res.body.item;
  } catch (error) {
    return res.status(404).send('Not Found');
  }

  // etag
  const uid = crypto
    .createHash('md5')
    .update(level.name + level.updatedTime)
    .digest('hex');
  const etag = (req.headers['if-none-match'] || '').toString();

  // 304 if cache exists
  if (etag === uid) {
    return res.status(304).end();
  }

  try {
    // ogp image size
    const viewport = { width: 1200, height: 630 };

    if (process.env.playwright_path === undefined) {
      const browserServer = await chromium.launchServer();
      const wsEndpoint = browserServer.wsEndpoint();

      process.env.playwright_path = wsEndpoint;
    }

    const browser = await chromium.connect({
      wsEndpoint: process.env.playwright_path,
      timeout: 2000,
    });

    const page = await browser.newPage({ viewport });

    // generate page
    const markup = ReactDOM.renderToStaticMarkup(<OGPImage {...level} />);
    await page.setContent(
      `<html>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      <style>
        body {font-family: 'Noto Sans JP', sans-serif;}
      </style>
    </head>
    <body>${markup}</body>
  </html>`,
      { waitUntil: 'load', timeout: 3000 },
    );

    // take screenshot
    const buf = await page.screenshot({ type: 'png', timeout: 3000 });
    await browser.close();

    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, must-revalidate');
    res.setHeader('ETag', uid);
    res.setHeader('Content-Type', 'image/png');
    res.end(buf);
  } catch (error) {
    return res.status(400).send('Timeout');
  }
}
