/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * It returns specified effect info
   * It will raise 404 if the effect is not registered in this server
   */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetEffectResponse
  }
}
