/* eslint-disable */
import type * as Types from '../../@types'

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

  /** 指定したskinを編集します */
  patch: {
    status: 200
    /** OK */
    resBody: Types.GetSkinResponse
    reqBody: Types.Skin
  }

  /** 指定されたスキンを削除します */
  delete: {
    status: 200
  }
}
