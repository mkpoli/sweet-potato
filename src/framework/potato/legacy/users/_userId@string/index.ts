/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 指定したユーザー情報を取得します */
  get: {
    status: 200
    /** OK */
    resBody: Types.User
  }

  /** 指定したuser情報を編集します */
  patch: {
    status: 200
    reqBody: Types.User
  }
}
