import fs from 'fs';
import path from 'path';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';
import { createCanvas, registerFont, loadImage } from 'canvas';

const current = process.cwd();
const size = { w: 1200, h: 630 };
const lineHeight = 1.7;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderText(ctx: any, x: number, y: number, text: string, fontSize: number, maxW: number) {
  ctx.font = `${fontSize}px "Noto"`;

  const lines: string[] = [''];
  let cw = 0;
  for (const char of text.split('')) {
    lines[lines.length - 1] += char;

    if (char.match(/^[A-Za-z0-9]*$/)) {
      cw += fontSize / 2;
    } else {
      cw += fontSize;
    }

    if (cw > maxW - fontSize) {
      lines.push('');
      cw = 0;
    }
  }

  for (let i = 0; i < lines.length; ++i) {
    ctx.fillText(lines[i], x, y + fontSize * (lineHeight * i + 1));
  }
}

export default async function scoreOGP(req: Req, res: Res) {
  const q = JSON.parse(JSON.stringify(req.query).replace('amp;', ''));

  const title = (q.title || '').toString();
  const author = (q.author || '').toString();

  const canvas = createCanvas(size.w, size.h);
  const ctx = canvas.getContext('2d');

  registerFont(path.resolve(current, 'src/assets/fonts/NotoSansJP-Bold.otf'), {
    family: 'Noto',
  });

  const src = path.resolve(current, 'src/assets/images/score.png');
  const image = await loadImage(fs.readFileSync(src));

  // set template image
  ctx.drawImage(image, 0, 0, size.w, size.h);

  renderText(ctx, 420, 80, title, 40, 700);
  renderText(ctx, 200, 485, author, 32, 700);

  const buf = canvas.toBuffer();
  const cacheAge = 7 * 24 * 60 * 60;
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Content-Length', buf.length);
  res.setHeader('Cache-Control', `public, max-age=${cacheAge}`);
  res.setHeader('Expires', new Date(Date.now() + cacheAge).toUTCString());
  res.status(200).end(buf);
}
