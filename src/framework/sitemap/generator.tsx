import { staticList } from 'framework/sitemap/static';
import { fetchNewScoreList } from 'framework/sitemap/new';

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

  const newScore = await fetchNewScoreList();
  console.log(newScore.length);
  for (const score of newScore) {
    UrlList += generateUrlXml(HOST + score.path, new Date(score.lastMod).toISOString(), score.freq);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${UrlList}
    </urlset>
  `;
}
