/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 指定されたゲームエンジンをサーバーに登録します */
  post: {
    status: 200
    /** OK */
    resBody: Types.GetEngineResponse
    reqBody: Types.Engine
  }
}
