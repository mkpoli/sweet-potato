/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * It returns specified skin info
   * It will raise 404 if the skin is not registered in this server
   */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetSkinResponse
  }
}
