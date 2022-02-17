export type Url = {
  path: string;
  freq: string;
};

export const staticList: Url[] = [
  {
    path: '', // root
    freq: 'always',
  },
  {
    path: '/levels/new',
    freq: 'always',
  },
];
