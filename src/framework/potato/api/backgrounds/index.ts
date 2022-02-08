/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 指定された背景情報をサーバーに登録します */
  post: {
    status: 200
    /** OK */
    resBody: Types.GetBackgroundResponse
    reqBody: Types.Background
  }
}
