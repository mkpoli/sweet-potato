import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';
import ReactDOM from 'react-dom/server';
import { chromium } from 'playwright';
import { client } from 'framework/potato/client';
import { Level } from 'framework/potato/api/@types';
import OGPImage from 'components/Card/OGPImage';

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
    return res.status(400).send('Bad request');
  }

  // ogp image size
  const viewport = { width: 1200, height: 630 };

  // launch browser
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport });

  // generate page
  const markup = ReactDOM.renderToStaticMarkup(<OGPImage {...level} />);
  await page.setContent(markup, { waitUntil: 'networkidle' });

  // take screenshot
  const buf = await page.screenshot({ type: 'png' });
  await browser.close();

  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');
  res.setHeader('Content-Type', 'image/png');
  res.end(buf);
}
