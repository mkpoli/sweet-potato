/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * It returns specified level info
   * It will raise 404 if the level is not registered in this server
   */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetLevelResponse
  }

  /** 指定されたlevelを編集します */
  patch: {
    status: 200
    /** OK */
    resBody: Types.GetLevelResponse
    reqBody: Types.Level
  }

  /** 指定されたレベルを削除します */
  delete: {
    status: 200
  }
}
