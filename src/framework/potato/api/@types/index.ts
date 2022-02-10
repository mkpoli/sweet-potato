/* eslint-disable */
import type { ReadStream } from 'fs';

export type Localization = {
  /** It localizes response items if possible */
  localization?: string;
};

export type Page = {
  /** Filters contents using pagination */
  page?: number;
};

export type Keywords = {
  /** Filter contents by specified keyword, in title and description */
  keywords?: string;
};

export type Author = {
  /** Filter contents by specified author */
  author?: string;
};

export type Rating_min = {
  /** Filter level contents by minimum rating */
  rating_min?: number;
};

export type Rating_max = {
  /** Filter level contents by maximum rating */
  rating_max?: number;
};

export type Order = {
  /** It specifies sort direction */
  order?: 'desc' | 'asc' | '0' | '1';
};

export type Length = {
  /** Filter level contents by specified length */
  length?: 'short' | 'long' | 'very_short' | 'very_long' | 'any';
};

export type Genre = {
  /** Filter contents by specified genre */
  genre?: 'general' | 'anime' | 'vocaloid' | 'jpop' | 'any';
};

export type Random = {
  /** It shuffles response list */
  random?: 0 | 1;
};

export type Sort = {
  /** It sorts contents using specified method */
  sort?: 'rating' | 'bpm' | 'notes' | 'likes' | 'mylists' | 'updated_time' | 'created_time';
};

export type Status = {
  /** Filters contents using specified status */
  status?: 'played' | 'unplayed' | 'liked' | 'mylisted' | 'testing' | 'any';
};

/**
 * A level provides a list of entities and powered by scripted behavior in engine, with skin, effect, background and particle, to create gameplay experience for players / It defines level for actual user play. It includes all data to play one level.
 * https://wiki.sonolus.com/custom-server-specs/misc/level-item.html
 */
export type Level = {
  /** english and number only name for searching */
  name: string;
  /** Reserved for future update. current default is 1. */
  version: number;
  /** Difficulty of the level */
  rating: number;
  engine: Engine;

  useSkin: {
    /** If true (recommended), default resource specified by the engine will be used. */
    useDefault: boolean;
    item: Skin;
  };

  useBackground: {
    /** If true (recommended), default resource specified by the engine will be used. */
    useDefault: boolean;
    item: Background;
  };

  useEffect: {
    /** If true (recommended), default resource specified by the engine will be used. */
    useDefault: boolean;
    item: Effect;
  };

  useParticle: {
    /** If true (recommended), default resource specified by the engine will be used. */
    useDefault: boolean;
    item: Particle;
  };

  /** base title of this content */
  title: string;
  /** base title(english) of this content */
  titleEn: string;
  /** artist names of original music */
  artists: string;
  /** artist names(english) of original music */
  artistsEn: string;
  /** author of this content */
  author: string;
  /** author of this content */
  authorEn: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  description: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  descriptionEn: string;
  cover: SonolusResourceLocator;
  bgm: SonolusResourceLocator;
  preview: SonolusResourceLocator;
  data: SonolusResourceLocator;
  /** 楽曲が全体公開かどうか */
  public: boolean;
  /** 楽曲のジャンル */
  genre: ('general' | 'jpop' | 'anime' | 'vocaloid')[];
  /** 譜面作成者のユーザーID */
  userId: string;
  /** データを作成したエポックミリ秒(ソート用) */
  createdTime: number;
  /** データを更新したエポックミリ秒(ソート用) */
  updatedTime: number;
  /** 曲の長さ */
  length: number;
  /** BPM */
  bpm: number;
  /** 譜面内のノーツ数 */
  notes: number;
  /** いいねされた回数 */
  likes: number;
  /** マイリストされた回数 */
  mylists: number;
};

/** お知らせ情報のリクエスト */
export type Announce = {
  /** english and number only name for searching */
  name: string;
  /** Difficulty of the level */
  rating: number;
  /** base title of this content */
  title: string;
  /** base title(english) of this content */
  titleEn: string;
  /** artist names of original music */
  subtitle: string;
  /** artist names(english) of original music */
  subtitleEn: string;
  /** author of this content */
  author: string;
  /** author of this content */
  authorEn: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  description: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  descriptionEn: string;
  cover: SonolusResourceLocator;
  bgm: SonolusResourceLocator;
  preview: SonolusResourceLocator;
  /** 楽曲が全体公開かどうか */
  public: boolean;
  /** 譜面作成者のユーザーID */
  userId: string;
  /** データを作成したエポックミリ秒(ソート用) */
  createdTime: number;
  /** データを更新したエポックミリ秒(ソート用) */
  updatedTime: number;
};

/**
 * A skin provides graphic elements to levels / It defines graphics for specific level
 * https://wiki.sonolus.com/custom-server-specs/misc/skin-item.html
 */
export type Skin = {
  /** english and number only name for searching */
  name: string;
  /** Reserved for future update. current default is 1. */
  version: number;
  /** base title of this content */
  title: string;
  /** base title(english) of this content */
  titleEn: string;
  /** something footer(ex. featuring xyz) for this content */
  subtitle: string;
  /** something footer(ex. featuring xyz) for this content */
  subtitleEn: string;
  /** author of this content */
  author: string;
  /** author of this content */
  authorEn: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  description: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  descriptionEn: string;
  thumbnail: SonolusResourceLocator;
  data: SonolusResourceLocator;
  texture: SonolusResourceLocator;
  /** データを作成したエポックミリ秒(ソート用) */
  createdTime: number;
  /** データを更新したエポックミリ秒(ソート用) */
  updatedTime: number;
  /** 譜面作成者のユーザーID */
  userId: string;
  /** 全体公開かどうか */
  public: boolean;
};

/**
 * A background provides background graphical element to levels / It defines background used for specific level
 * https://github.com/NonSpicyBurrito/sonolus-wiki/wiki/Background
 */
export type Background = {
  /** english and number only name for searching */
  name: string;
  /** Reserved for future update. current default is 1. */
  version: number;
  /** base title of this content */
  title: string;
  /** base title(english) of this content */
  titleEn: string;
  /** something footer(ex. featuring xyz) for this content */
  subtitle: string;
  /** something footer(ex. featuring xyz) for this content */
  subtitleEn: string;
  /** author of this content */
  author: string;
  /** author of this content */
  authorEn: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  description: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  descriptionEn: string;
  thumbnail: SonolusResourceLocator;
  data: SonolusResourceLocator;
  image: SonolusResourceLocator;
  configuration: SonolusResourceLocator;
  /** データを作成したエポックミリ秒(ソート用) */
  createdTime: number;
  /** データを更新したエポックミリ秒(ソート用) */
  updatedTime: number;
  /** 譜面作成者のユーザーID */
  userId: string;
  /** 全体公開かどうか */
  public: boolean;
};

/**
 * An effect provides audio elements to levels / It defines audio effect used for specific level
 * https://wiki.sonolus.com/custom-server-specs/misc/effect-item.html
 */
export type Effect = {
  /** english and number only name for searching */
  name: string;
  /** Reserved for future update. current default is 1. */
  version: number;
  /** base title of this content */
  title: string;
  /** base title(english) of this content */
  titleEn: string;
  /** something footer(ex. featuring xyz) for this content */
  subtitle: string;
  /** something footer(ex. featuring xyz) for this content */
  subtitleEn: string;
  /** author of this content */
  author: string;
  /** author of this content */
  authorEn: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  description: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  descriptionEn: string;
  thumbnail: SonolusResourceLocator;
  data: SonolusResourceLocator;
  /** データを作成したエポックミリ秒(ソート用) */
  createdTime: number;
  /** データを更新したエポックミリ秒(ソート用) */
  updatedTime: number;
  /** 譜面作成者のユーザーID */
  userId: string;
  /** 全体公開かどうか */
  public: boolean;
};

/**
 * A particle provides particle effect elements to levels / It defines particle effect used for specific level
 * https://wiki.sonolus.com/custom-server-specs/misc/particle-item.html
 */
export type Particle = {
  /** english and number only name for searching */
  name: string;
  /** Reserved for future update. current default is 1. */
  version: number;
  /** base title of this content */
  title: string;
  /** base title(english) of this content */
  titleEn: string;
  /** something footer(ex. featuring xyz) for this content */
  subtitle: string;
  /** something footer(ex. featuring xyz) for this content */
  subtitleEn: string;
  /** author of this content */
  author: string;
  /** author of this content */
  authorEn: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  description: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  descriptionEn: string;
  thumbnail: SonolusResourceLocator;
  data: SonolusResourceLocator;
  texture: SonolusResourceLocator;
  /** データを作成したエポックミリ秒(ソート用) */
  createdTime: number;
  /** データを更新したエポックミリ秒(ソート用) */
  updatedTime: number;
  /** 譜面作成者のユーザーID */
  userId: string;
  /** 全体公開かどうか */
  public: boolean;
};

/**
 * An engine provides scripted behaviors to levels / It defines shared game engine for playing
 * https://wiki.sonolus.com/custom-server-specs/misc/engine-item.html
 */
export type Engine = {
  /** english and number only name for searching */
  name: string;
  /** Reserved for future update. current default is 1. */
  version: number;
  /** base title of this content */
  title: string;
  /** base title(english) of this content */
  titleEn: string;
  /** something footer(ex. featuring xyz) for this content */
  subtitle: string;
  /** something footer(ex. featuring xyz) for this content */
  subtitleEn: string;
  /** author of this content */
  author: string;
  /** author of this content */
  authorEn: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  description: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  descriptionEn: string;
  thumbnail: SonolusResourceLocator;
  data: SonolusResourceLocator;
  configuration: SonolusResourceLocator;
  skin: Skin;
  background: Background;
  effect: Effect;
  particle: Particle;
  /** データを作成したエポックミリ秒(ソート用) */
  createdTime: number;
  /** データを更新したエポックミリ秒(ソート用) */
  updatedTime: number;
  /** 譜面作成者のユーザーID */
  userId: string;
  /** 全体公開かどうか */
  public: boolean;
};

/**
 * Sonolus Resource Locator(SRL) is used in server endpoints in order for Sonolus to locate a resource.
 * All resources must be gzip compressed.
 * https://wiki.sonolus.com/custom-server-specs/misc/srl.html
 */
export type SonolusResourceLocator = {
  /** When specify type together with hash uniquely identifies a resource. */
  type:
    | 'SkinData'
    | 'EngineThumbnail'
    | 'EffectData'
    | 'SkinTexture'
    | 'ParticleData'
    | 'EffectThumbnail'
    | 'LevelBgm'
    | 'BackgroundThumbnail'
    | 'EngineConfiguration'
    | 'LevelData'
    | 'LevelPreview'
    | 'ParticleTexture'
    | 'BackgroundData'
    | 'EngineData'
    | 'BackgroundImage'
    | 'LevelCover'
    | 'SkinThumbnail'
    | 'ParticleThumbnail'
    | 'BackgroundConfiguration';
  /** Hash is calculated using SHA1 on the resource file */
  hash: string;
  /** If url starts with character /, it will be treated as relative path to server address. */
  url: string;
};

/**
 * Response struct of getBackgroundList
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-backgrounds-list.html
 */
export type GetBackgroundListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number;
  items: Background[];
  search: Search;
};

/**
 * Response struct of getEffectList
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-effects-list.html
 */
export type GetEffectListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number;
  items: Effect[];
  search: Search;
};

/**
 * Response struct of getEngineList
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-engines-list.html
 */
export type GetEngineListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number;
  items: Engine[];
  search: Search;
};

/**
 * Response struct of getLevelList
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-levels-list.html
 */
export type GetLevelListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number;
  items: Level[];
  search: Search;
};

/**
 * Response struct of getParticleList
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-particles-list.html
 */
export type GetParticleListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number;
  items: Particle[];
  search: Search;
};

/**
 * Response struct of getSkinList
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-skins-list.html
 */
export type GetSkinListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number;
  items: Skin[];
  search: Search;
};

/**
 * Response struct of getLevel
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-levels-name.html
 */
export type GetLevelResponse = {
  item: Level;
  description: string;
  recommended: Level[];
};

/**
 * Response struct of getBackground
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-backgrounds-name.html
 */
export type GetBackgroundResponse = {
  item: Background;
  description: string;
  recommended: Background[];
};

/**
 * Response struct of getEffect
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-effects-name.html
 */
export type GetEffectResponse = {
  item: Effect;
  description: string;
  recommended: Effect[];
};

/**
 * Response struct of getEngine
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-engines-name.html
 */
export type GetEngineResponse = {
  item: Engine;
  description: string;
  recommended: Engine[];
};

/**
 * Response struct of getParticle
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-particles-name.html
 */
export type GetParticleResponse = {
  item: Particle;
  description: string;
  recommended: Particle[];
};

/**
 * Response struct of getSkin
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-skins-name.html
 */
export type GetSkinResponse = {
  item: Skin;
  description: string;
  recommended: Skin[];
};

/**
 * Response struct of getServerInfo
 * https://wiki.sonolus.com/custom-server-specs/endpoints/get-info.html
 */
export type ServerInfo = {
  levels: {
    items: Level[];
    search: Search;
  };

  skins: {
    items: Skin[];
    search: Search;
  };

  backgrounds: {
    items: Background[];
    search: Search;
  };

  effects: {
    items: Effect[];
    search: Search;
  };

  particles: {
    items: Particle[];
    search: Search;
  };

  engines: {
    items: Engine[];
    search: Search;
  };
};

/** ユーザー情報型 */
export type User = {
  /** FirebaseDatabase上のユーザーID */
  userId: string;
  /** テスト用サーバーのエンドポイント */
  testId: string;
  /** アカウント鍵 */
  accountId: string;
  /** サイト内および譜面情報欄に表示される説明文 */
  description: string;
  /** データを作成したエポックミリ秒(ソート用) */
  createdTime: number;
  /** データを更新したエポックミリ秒(ソート用) */
  updatedTime: number;

  /** 各種統計 */
  total: {
    /** いいねされた回数 */
    likes: number;
    /** プレイした回数 */
    plays: number;
    /** お気に入りした回数 */
    favorites: number;

    /** 公開した個数 */
    publish: {
      /** 背景数 */
      backgrounds: number;
      /** 効果音数 */
      effects: number;
      /** エンジン数 */
      engines: number;
      /** パーティクル数 */
      particles: number;
      /** 譜面数 */
      levels: number;
      /** スキン数 */
      skins: number;
    };
  };

  /** 管理者か否か。API経由の変更は不可で管理パネルからどうこうする */
  isAdmin: boolean;
  /** アカウント削除フラグ(trueで削除済み扱い) */
  isDeleted: boolean;
};

/** Struct of getList response */
export type GetUserListResponse = {
  /** サーバーに登録されたユーザー一覧 */
  users: User[];
  /** 合計アカウント数 */
  total: number;
  /** 合計ページ数 */
  pages: number;
};

/** おすすめ譜面のリクエスト(独自) */
export type Pickup = {
  /** 譜面ID */
  name: string;
  /** 表示順序 */
  order: number;
};

/** Struct of post upload response */
export type PostUploadResponse = {
  /** Response status in human readable */
  message: string;
  /** Created filename */
  filename?: string;
};

export type Upload = {
  file: File | ReadStream;
  type:
    | 'SkinData'
    | 'EngineThumbnail'
    | 'EffectData'
    | 'SkinTexture'
    | 'ParticleData'
    | 'EffectThumbnail'
    | 'LevelBgm'
    | 'BackgroundThumbnail'
    | 'EngineConfiguration'
    | 'LevelData'
    | 'LevelPreview'
    | 'ParticleTexture'
    | 'BackgroundData'
    | 'EngineData'
    | 'BackgroundImage'
    | 'LevelCover'
    | 'SkinThumbnail'
    | 'ParticleThumbnail'
    | 'BackgroundConfiguration';
};

/** It specifies what search query supported */
export type Search = {
  options: Partial<
    SearchTextOption & SearchSliderOption & SearchToggleOption & SearchSelectOption
  >[];
};

/** Text style search option */
export type SearchTextOption = {
  /** query name */
  query: string;
  /** GUI name, if put in-app supported localizable text that startswith #, it gets localized. */
  name: string;
  /** option type (be autofilled) */
  type: 'text';
  /** hint for input */
  placeholder: string;
};

/** Slider style search option */
export type SearchSliderOption = {
  /** query name */
  query: string;
  /** GUI name. if put in-app supported localizable text that startswith #, it gets localized. */
  name: string;
  /** option type (be autofilled) */
  type: 'slider';
  /** default value */
  def: number;
  /** minimum value */
  min: number;
  /** maximum value */
  max: number;
  /** step value per move */
  step: number;
  /** display type (percentage or number) */
  display: 'number' | 'percentage';
};

/** Toggle switch style search option */
export type SearchToggleOption = {
  /** query name */
  query: string;
  /** GUI name. if put in-app supported localizable text that startswith #, it gets localized. */
  name: string;
  /** option type (be autofilled) */
  type: 'toggle';
  /** default value true(1)/false(0) */
  def: number;
};

/** Select button style search option */
export type SearchSelectOption = {
  /** query name */
  query: string;
  /** GUI name. if put in-app supported localizable text that startswith #, it gets localized. */
  name: string;
  /** option type (be autofilled) */
  type: 'select';
  /** default selection index */
  def: number;
  /** selectable text elements array */
  values: string[];
};
