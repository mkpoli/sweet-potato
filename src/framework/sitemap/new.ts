import { client } from 'framework/potato/client';

export type Url = {
  path: string;
  lastMod: number;
  freq: string;
};

export async function fetchNewScoreList() {
  const result: Url[] = [];
  let page = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const raw = await client.levels.list.$get({ query: { page: page } });

    for (const item of raw.items) {
      const updated = item.updatedTime === undefined ? Date.now() : item.updatedTime;
      result.push({ path: `/levels/${item.name}`, lastMod: updated, freq: 'daily' });
    }

    if (raw.items.length !== 20) {
      break;
    }
    page += 1;
  }

  return result;
}
