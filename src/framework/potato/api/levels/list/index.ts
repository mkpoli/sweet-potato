/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * It returns list of level infos registered in this server
   * Also it can search using query params
   */
  get: {
    query?: Types.Localization & Types.Page & Types.Keywords & Types.Sort & Types.Order & Types.Status & Types.Author & Types.Rating_min & Types.Rating_max & Types.Genre & Types.Length & Types.Random
    status: 200
    /** OK */
    resBody: Types.GetLevelListResponse
  }
}
