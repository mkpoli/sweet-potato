/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * It returns specified engine info
   * It will raise 404 if the engine is not registered in this server
   */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetEngineResponse
  }
}
