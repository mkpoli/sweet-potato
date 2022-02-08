/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * It returns list of skin infos registered in this server
   * Also it can search using query params
   */
  get: {
    query?: Types.Localization & Types.Page & Types.Keywords & Types.Sort & Types.Order & Types.Status & Types.Author & Types.Random
    status: 200
    /** OK */
    resBody: Types.GetSkinListResponse
  }
}
