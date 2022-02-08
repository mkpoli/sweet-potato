/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 指定されたアナウンスデータを返す */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetLevelResponse
  }

  /** 指定されたアナウンスを削除します */
  delete: {
    status: 200
  }

  /** 指定したアナウンスを編集します */
  patch: {
    status: 200
    /** OK */
    resBody: Types.GetLevelResponse
    reqBody: Types.Announce
  }
}
