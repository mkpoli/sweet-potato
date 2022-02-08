/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * It returns small list of all infos registered in this server
   * (It should be trimed if the server has too many items)
   */
  get: {
    status: 200
    /** OK */
    resBody: Types.ServerInfo
  }
}
