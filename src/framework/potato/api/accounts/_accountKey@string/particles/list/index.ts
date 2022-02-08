/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** ユーザー個別用エンドポイント/ パーティクル一覧を返す */
  get: {
    query?: Types.Localization & Types.Page & Types.Keywords & Types.Sort & Types.Order & Types.Status & Types.Author & Types.Random
    status: 200
    /** OK */
    resBody: Types.GetParticleListResponse
  }
}
