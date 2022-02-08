/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 譜面のピックアップを追加します */
  post: {
    status: 200
    /** OK */
    resBody: Types.GetLevelResponse
    reqBody: Types.Pickup
  }
}
