/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** 譜面テスト用エンドポイント/ エンジン一覧を返す(一般のエンジンリストと同じのが返される) */
  get: {
    query?: Types.Localization & Types.Page & Types.Keywords & Types.Sort & Types.Order & Types.Status & Types.Author & Types.Random
    status: 200
    /** OK */
    resBody: Types.GetEngineListResponse
  }
}
