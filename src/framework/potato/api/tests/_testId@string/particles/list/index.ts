/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** 譜面テスト用エンドポイント/ パーティクル一覧を返す(一般の背景リストと同じのが返される) */
  get: {
    query?: Types.Localization & Types.Page & Types.Keywords & Types.Sort & Types.Order & Types.Status & Types.Author & Types.Random
    status: 200
    /** OK */
    resBody: Types.GetParticleListResponse
  }
}
