/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 管理者の指定したおすすめ譜面などを返すエンドポイント */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetLevelResponse
  }
}
