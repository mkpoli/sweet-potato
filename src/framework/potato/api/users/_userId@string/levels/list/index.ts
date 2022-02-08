/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** ユーザー個別用エンドポイント/ 背景一覧を返す */
  get: {
    query?: Types.Localization & Types.Page & Types.Keywords & Types.Sort & Types.Order & Types.Status & Types.Author & Types.Rating_min & Types.Rating_max & Types.Genre & Types.Length & Types.Random
    status: 200
    /** OK */
    resBody: Types.GetLevelListResponse
  }
}
