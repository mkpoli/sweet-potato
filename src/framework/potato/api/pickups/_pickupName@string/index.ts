/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 指定したピックアップを削除します */
  delete: {
    status: 200
  }

  /** 指定されたIDのピックアップを取得して返す */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetLevelResponse
  }
}
