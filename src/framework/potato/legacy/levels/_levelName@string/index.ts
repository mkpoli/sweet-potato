/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * It returns specified level info
   * It will raise 404 if the level is not registered in this server
   */
  get: {
    query?: Types.Localization
    status: 200
    /** OK */
    resBody: Types.GetLevelResponse
  }

  /** 指定された譜面情報をサーバーに登録します */
  post: {
    status: 200
    reqBody: Types.Level
  }

  /** 指定されたlevelを編集します */
  patch: {
    status: 200
    reqBody: Types.Level
  }
}
