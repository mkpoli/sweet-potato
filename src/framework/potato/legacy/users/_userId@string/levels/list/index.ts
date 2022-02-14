/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** ユーザー個別用エンドポイント/ 背景一覧を返す */
  get: {
    query?: Types.Localization & Types.Page & Types.Keywords
    status: 200
    /** OK */
    resBody: Types.GetLevelListResponse
  }
}
