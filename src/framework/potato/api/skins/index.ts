/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 指定されたスキン情報をサーバーに登録します */
  post: {
    status: 200
    /** OK */
    resBody: Types.GetSkinResponse
    reqBody: Types.Skin
  }
}
