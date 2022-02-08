/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * It returns specified background info
   * It will raise 404 if the background is not registered in this server
   */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetBackgroundResponse
  }
}
