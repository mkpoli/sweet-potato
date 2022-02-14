/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * ファイルのアップロードを受け付ける
   * (投稿から1時間以上使用されないファイルは自動削除したい)
   */
  post: {
    status: 200
    /** OK */
    resBody: Types.PostUploadResponse
    reqFormat: FormData
    reqBody: Types.Upload
  }
}
