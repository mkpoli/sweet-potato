import { SonolusResourceLocator } from './SRL';

export type Level = {
  /** Reserved for future update. current default is 1. */
  version: number;

  /** text shown in website */
  title: string;
  titleEn: string;
  artists: string;
  artistsEn: string;
  author: string;
  authorEn: string;
  description: string;
  descriptionEn: string;

  /** details of the music */
  createdTime: number;
  updatedTime: number;
  name: string;
  userId: string;
  cover: SonolusResourceLocator;
  rating: number;
  genre: ('general' | 'jpop' | 'anime' | 'vocaloid')[];
  length: number;
  bpm: number;
  notes: number;
  likes: number;
  mylists: number;
};
