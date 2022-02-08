/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Add specified new user to server */
  post: {
    status: 200
    /** OK */
    resBody: Types.User
    reqBody: Types.User
  }
}
