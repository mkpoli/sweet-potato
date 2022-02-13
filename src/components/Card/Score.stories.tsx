import { SimpleGrid } from '@chakra-ui/react';
import { Level } from 'models/Level';
import React from 'react';
import Score from './Score';

export default { title: 'Card/Score' };

const level: Level = {
  name: 'uid',
  title: '【FULL】the EmpErroR',
  rating: 35,
  author: 'トトロっぽい何か＋プロジェクトセカイ',
  cover: {
    type: 'LevelCover',
    hash: '',
    url: 'https://servers-legacy.purplepalette.net/repository/bvyE6HpLGvN5/cover.png',
  },
  version: 0,
  titleEn: '',
  artists: '',
  artistsEn: '',
  authorEn: '',
  description: '',
  descriptionEn: '',
  createdTime: 0,
  updatedTime: 0,
  userId: '',
  genre: [],
  length: 0,
  bpm: 0,
  notes: 0,
  likes: 0,
  mylists: 0,
};

export const defaultStyle = (): JSX.Element => (
  <SimpleGrid mx={[0, 0, 0, 0, 12]} columns={[1, 2, 2, 3, 4]} spacing={[2, 2, 4, 4, 8]}>
    <Score {...level} />
  </SimpleGrid>
);
