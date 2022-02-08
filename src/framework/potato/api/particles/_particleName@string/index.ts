/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * It returns specified particle info
   * It will raise 404 if the particle is not registered in this server
   */
  get: {
    status: 200
    /** OK */
    resBody: Types.GetParticleResponse
  }

  /** 指定したparticleを編集します */
  patch: {
    status: 200
    /** OK */
    resBody: Types.GetParticleResponse
    reqBody: Types.Particle
  }

  /** 指定されたパーティクルを削除する */
  delete: {
    status: 200
  }
}
