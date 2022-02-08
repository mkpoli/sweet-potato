/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 新規譜面作者の譜面のみを返すエンドポイント */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetLevelResponse
  }
}
