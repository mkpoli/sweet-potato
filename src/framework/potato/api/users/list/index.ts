/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** サーバーに登録されたユーザー一覧を返します */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetUserListResponse
  }
}
