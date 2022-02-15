import React from 'react';
import OGPImage from 'components/Card/OGPImage';
import { Box } from '@chakra-ui/react';

export default { title: 'Card/OGPImage' };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const level: any = {
  name: 'oQSrglowcAUS',
  version: 1,
  rating: 33,
  engine: {
    name: 'pjsekai',
    version: 4,
    title: 'プロセカ',
    subtitle: 'プロジェクトセカイ カラフルステージ!',
    author: 'Burrito',
    skin: {
      name: 'pjsekai.classic',
      version: 2,
      title: 'Project Sekai',
      subtitle: 'Project Sekai: Colorful Stage!',
      author: 'Sonolus',
      thumbnail: [Object],
      data: [Object],
      texture: [Object],
    },
    background: {
      name: 'pjsekai.live',
      version: 2,
      title: 'Project Sekai',
      subtitle: 'Project Sekai: Colorful Stage!',
      author: 'Sonolus',
      thumbnail: [Object],
      data: [Object],
      image: [Object],
      configuration: [Object],
    },
    effect: {
      name: 'pjsekai.classic',
      version: 2,
      title: 'プロセカ',
      subtitle: 'プロジェクトセカイ カラフルステージ!',
      author: 'Sonolus',
      thumbnail: [Object],
      data: [Object],
    },
    particle: {
      name: 'pjsekai.classic',
      version: 1,
      title: 'Project Sekai',
      subtitle: 'Project Sekai: Colorful Stage!',
      author: 'Sonolus',
      thumbnail: [Object],
      data: [Object],
      texture: [Object],
    },
    thumbnail: {
      type: 'EngineThumbnail',
      hash: 'e5f439916eac9bbd316276e20aed999993653560',
      url: '/repository/EngineThumbnail/e5f439916eac9bbd316276e20aed999993653560',
    },
    data: {
      type: 'EngineData',
      hash: '201a2a4022c8cd188c922fa5658e4fdc3ab83430',
      url: '/repository/EngineData/201a2a4022c8cd188c922fa5658e4fdc3ab83430',
    },
    configuration: {
      type: 'EngineConfiguration',
      hash: '55ada0ef19553e6a6742cffbb66f7dce9f85a7ee',
      url: '/repository/EngineConfiguration/55ada0ef19553e6a6742cffbb66f7dce9f85a7ee',
    },
  },
  useSkin: { useDefault: true },
  useBackground: { useDefault: true },
  useEffect: { useDefault: true },
  useParticle: { useDefault: true },
  title: 'プロジェクトセカイ100曲ピアノメドレー(注：20分を超えている譜面です)',
  artists: 'プロジェクトセカイ＋yoshi',
  author: 'トトロっぽい何か',
  cover: {
    type: 'LevelCover',
    hash: 'cac0f1cbc25036eed04f893ab125e4ed7b6d4207',
    url: '/repository/oQSrglowcAUS/cover.png',
  },
  bgm: {
    type: 'LevelBgm',
    hash: '321685f52a59c851ce4fca0566e9e73555005da3',
    url: '/repository/oQSrglowcAUS/bgm.mp3',
  },
  data: {
    type: 'LevelData',
    hash: '4eeb5379d91888ee32d470e4f84fe61ba212930a',
    url: '/repository/oQSrglowcAUS/data.gz',
  },
};

export const normal = (): JSX.Element => (
  <Box w="1200px" h="630px">
    <OGPImage {...level} />
  </Box>
);
