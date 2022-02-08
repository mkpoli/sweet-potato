/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 指定されたパーティクル情報をサーバーに登録します */
  post: {
    status: 200
    /** OK */
    resBody: Types.GetParticleResponse
    reqBody: Types.Particle
  }
}
