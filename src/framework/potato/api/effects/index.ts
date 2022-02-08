/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 指定されたeffectをサーバーに登録します */
  post: {
    status: 200
    /** OK */
    resBody: Types.GetEffectResponse
    reqBody: Types.Effect
  }
}
