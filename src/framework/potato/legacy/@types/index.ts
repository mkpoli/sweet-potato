/* eslint-disable */
import type { ReadStream } from 'fs'

export type Localization = {
  /** It localizes response items if possible */
  localization?: string
}

export type Page = {
  /** It filters items for pagination if possible */
  page?: number
}

export type Keywords = {
  /** It filters items for search from list if possible */
  keywords?: string
}

export type Version = {
  /** Sonolus client version */
  'sonolus-version': string
}

/** Struct of post upload response */
export type PostUploadResponse = {
  /** Response status in human readable */
  message: string
  /** Created filename */
  filename?: string
}

export type Upload = {
  file: File | ReadStream
}

/**
 * A level provides a list of entities and powered by scripted behavior in engine, with skin, effect, background and particle, to create gameplay experience for players / It defines level for actual user play. It includes all data to play one level.
 * https://github.com/NonSpicyBurrito/sonolus-wiki/wiki/Level
 */
export type Level = {
  /** english and number only name for searching */
  name: string
  /** Reserved for future update. current default is 1. */
  version: number
  /** Difficulty of the level */
  rating: number
  /** Just a name of engine (Sonolus-express finds the engine from db) */
  engine: string

  useSkin?: {
    /** If true (recommended), default resource specified by the engine will be used. */
    useDefault: boolean
    item: Skin
  }

  useBackground?: {
    /** If true (recommended), default resource specified by the engine will be used. */
    useDefault: boolean
    item: Background
  }

  useEffect?: {
    /** If true (recommended), default resource specified by the engine will be used. */
    useDefault: boolean
    item: Effect
  }

  useParticle?: {
    /** If true (recommended), default resource specified by the engine will be used. */
    useDefault: boolean
    item: Particle
  }

  title: LocalizationText
  artists: LocalizationText
  author: LocalizationText
  cover: SonolusResourceLocator
  bgm: SonolusResourceLocator
  data: SonolusResourceLocator
  /** 独自要素: 楽曲のジャンル */
  genre: string
  /** 独自要素: 楽曲が全体公開かどうか */
  public?: boolean
  /** 独自要素: 譜面作成者のユーザーID */
  userId?: string
  /** 独自要素: 譜面内のノーツ数 */
  notes?: number
  /** 独自要素: データを作成したエポックミリ秒(ソート用) */
  createdTime?: number
  /** 独自要素: データを更新したエポックミリ秒(ソート用) */
  updatedTime?: number
  description: LocalizationText
  /** 独自要素: サムネのハッシュ値(DBを兼ねるため) */
  coverHash?: string
  /** 独自要素: データのハッシュ(DBを兼ねるため) */
  dataHash?: string
  /** 独自要素: BGMのハッシュ(DBを兼ねるため) */
  bgmHash?: string
  /** 独自要素: プレイされた回数 */
  playCount?: number
}

/**
 * A skin provides graphic elements to levels / It defines graphics for specific level
 * https://github.com/NonSpicyBurrito/sonolus-wiki/wiki/Skin
 * https://github.com/NonSpicyBurrito/sonolus-wiki/wiki/Server
 */
export type Skin = {
  /** english and number only name for searching */
  name: string
  /** Reserved for future update. current default is 1. */
  version: number
  /** base title of this content */
  title: string
  /** something footer(ex. featuring xyz) for this content */
  subtitle: string
  /** author of this content */
  author: string
  thumbnail: SonolusResourceLocator
  data: SonolusResourceLocator
  texture: SonolusResourceLocator
  /** 独自要素: データを作成したエポックミリ秒(ソート用) */
  createdTime: number
  /** 独自要素: データを更新したエポックミリ秒(ソート用) */
  updatedTime: number
  /** 独自要素: 譜面作成者のユーザーID */
  userId: string
  /** 独自要素: サイト内および譜面情報欄に表示される説明文 */
  description: string
}

/**
 * A background provides background graphical element to levels / It defines background used for specific level
 * https://github.com/NonSpicyBurrito/sonolus-wiki/wiki/Background
 */
export type Background = {
  /** english and number only name for searching */
  name: string
  /** Reserved for future update. current default is 1. */
  version: number
  /** base title of this content */
  title: string
  /** something footer(ex. featuring xyz) for this content */
  subtitle: string
  /** author of this content */
  author: string
  thumbnail: SonolusResourceLocator
  data: SonolusResourceLocator
  image: SonolusResourceLocator
  /** 独自要素: データを作成したエポックミリ秒(ソート用) */
  createdTime: number
  /** 独自要素: データを更新したエポックミリ秒(ソート用) */
  updatedTime: number
  /** 独自要素: 譜面作成者のユーザーID */
  userId: string
  /** 独自要素: サイト内および譜面情報欄に表示される説明文 */
  description: string
}

/**
 * An effect provides audio elements to levels / It defines audio effect used for specific level
 * https://github.com/NonSpicyBurrito/sonolus-wiki/wiki/Effect
 */
export type Effect = {
  /** english and number only name for searching */
  name: string
  /** Reserved for future update. current default is 1. */
  version: number
  /** base title of this content */
  title: string
  /** something footer(ex. featuring xyz) for this content */
  subtitle: string
  /** author of this content */
  author: string
  thumbnail: SonolusResourceLocator
  data: SonolusResourceLocator
  /** 独自要素: データを作成したエポックミリ秒(ソート用) */
  createdTime: number
  /** 独自要素: データを更新したエポックミリ秒(ソート用) */
  updatedTime: number
  /** 独自要素: 譜面作成者のユーザーID */
  userId: string
  /** 独自要素: サイト内および譜面情報欄に表示される説明文 */
  description: string
}

/**
 * A particle provides particle effect elements to levels / It defines particle effect used for specific level
 * https://github.com/NonSpicyBurrito/sonolus-wiki/wiki/Particle
 */
export type Particle = {
  /** english and number only name for searching */
  name: string
  /** Reserved for future update. current default is 1. */
  version: number
  /** base title of this content */
  title: string
  /** something footer(ex. featuring xyz) for this content */
  subtitle: string
  /** author of this content */
  author: string
  thumbnail: SonolusResourceLocator
  data: SonolusResourceLocator
  texture: SonolusResourceLocator
  /** 独自要素: 譜面作成者のユーザーID */
  userId: string
  /** 独自要素: データを作成したエポックミリ秒(ソート用) */
  createdTime: number
  /** 独自要素: データを更新したエポックミリ秒(ソート用) */
  updatedTime: number
  /** 独自要素: サイト内および譜面情報欄に表示される説明文 */
  description: string
}

/**
 * An engine provides scripted behaviors to levels / It defines shared game engine for playing
 * https://github.com/NonSpicyBurrito/sonolus-wiki/wiki/Engine
 */
export type Engine = {
  /** english and number only name for searching */
  name: string
  /** Reserved for future update. current default is 1. */
  version: number
  /** base title of this content */
  title: string
  /** something footer(ex. featuring xyz) for this content */
  subtitle: string
  /** author of this content */
  author: string
  thumbnail: SonolusResourceLocator
  data: SonolusResourceLocator
  configuration: SonolusResourceLocator
  skin: Skin
  background: Background
  effect: Effect
  particle: Particle
  /** 独自要素: データを作成したエポックミリ秒(ソート用) */
  createdTime: number
  /** 独自要素: データを更新したエポックミリ秒(ソート用) */
  updatedTime: number
  /** 独自要素: 譜面作成者のユーザーID */
  userId: string
  /** 独自要素: サイト内および譜面情報欄に表示される説明文 */
  description: string
}

/**
 * Sonolus Resource Locator(SRL) is used in server endpoints in order for Sonolus to locate a resource.
 * All resources must be gzip compressed.
 * https://github.com/NonSpicyBurrito/sonolus-wiki/wiki/Resource-and-SRL
 */
export type SonolusResourceLocator = {
  /** When specify type together with hash uniquely identifies a resource. */
  type: 'SkinData' | 'EngineThumbnail' | 'EffectData' | 'SkinTexture' | 'ParticleData' | 'EffectThumbnail' | 'LevelBgm' | 'BackgroundThumbnail' | 'EngineConfiguration' | 'LevelData' | 'ParticleTexture' | 'BackgroundData' | 'EngineData' | 'BackgroundImage' | 'LevelCover' | 'SkinThumbnail' | 'ParticleThumbnail'
  /** Hash is calculated using SHA1 on the resource file */
  hash: string
  /** If url starts with character /, it will be treated as relative path to server address. */
  url: string
}

/** Response struct of getBackgroundList */
export type GetBackgroundListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number
  items: Background[]
}

/** Response struct of getEffectList */
export type GetEffectListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number
  items: Effect[]
}

/** Response struct of getEngineList */
export type GetEngineListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number
  items: Engine[]
}

/** Response struct of getLevelList */
export type GetLevelListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number
  items: Level[]
}

/** Response struct of getParticleList */
export type GetParticleListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number
  items: Particle[]
}

/** Response struct of getSkinList */
export type GetSkinListResponse = {
  /** used for pagination, default is 1 */
  pageCount: number
  items: Skin[]
}

/** Response struct of getLevel */
export type GetLevelResponse = {
  item: Level
  description: string
  recommended: Level[]
}

/** Response struct of getBackground */
export type GetBackgroundResponse = {
  item: Background
  description: string
  recommended: Background[]
}

/** Response struct of getEffect */
export type GetEffectResponse = {
  item: Effect
  description: string
  recommended: Effect[]
}

/** Response struct of getEngine */
export type GetEngineResponse = {
  item: Engine
  description: string
  recommended: Engine[]
}

/** Response struct of getParticle */
export type GetParticleResponse = {
  item: Particle
  description: string
  recommended: Particle[]
}

/** Response struct of getSkin */
export type GetSkinResponse = {
  item: Skin
  description: string
  recommended: Skin[]
}

/** Response / Request struct of getServerInfo */
export type ServerInfo = {
  levels: Level[]
  skins: Skin[]
  backgrounds: Background[]
  effects: Effect[]
  particles: Particle[]
  engines: Engine[]
}

/** ユーザー情報型 */
export type User = {
  /** FirebaseDatabase上のユーザーID */
  userId: string
  /** テスト用サーバーのエンドポイント */
  testId: string
  /** 管理者か否か */
  isAdmin: boolean
  /** アカウント削除フラグ(trueで削除済み扱い) */
  isDeleted: boolean
  /** トータル譜面数 */
  totalFumen: number
  /** 独自要素: データを作成したエポックミリ秒(ソート用) */
  createdTime: number
  /** 独自要素: データを更新したエポックミリ秒(ソート用) */
  updatedTime: number
  /** 独自要素: サイト内および譜面情報欄に表示される説明文 */
  description: string
}

/** Structure of getList response */
export type GetUserListResponse = {
  /** サーバーに登録されたユーザー一覧 */
  users: User[]
  /** 合計アカウント数 */
  total: number
  /** 合計ページ数 */
  pages: number
}

export type LocalizationText = {
  /** Simplified Chinese */
  cn?: string
  /** TraditionalChinese */
  tw?: string
  /** Japanese */
  ja: string
  /** English */
  en?: string
  /** Korean */
  ko?: string
  /** Indonesian */
  id?: string
  /** Spanish */
  es?: string
}
