import { staticList } from 'framework/sitemap/static';

export const HOST = process.env.NEXT_PUBLIC_FRONT_URL;

function generateUrlXml(loc: string, lastMod: string, freq: string) {
  return `
    <url>
      <loc>${loc}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>${freq}</changefreq>
    </url>
  `;
}

export async function generateSitemapXml() {
  let UrlList = '';

  for (const url of staticList) {
    UrlList += generateUrlXml(HOST + url.path, new Date().toISOString(), url.freq);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${UrlList}
    </urlset>
  `;
}
