/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_pickupName@string'
// prettier-ignore
import { Methods as Methods2 } from './list'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:5000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/pickups'
  const PATH1 = '/pickups/list'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    _pickupName: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * 指定したピックアップを削除します
         */
        delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * 指定したピックアップを削除します
         */
        $delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        /**
         * 指定されたIDのピックアップを取得して返す
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 指定されたIDのピックアップを取得して返す
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    list: {
      /**
       * ピックアップ中のデータ一覧を返す
       * @returns OK
       */
      get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * ピックアップ中のデータ一覧を返す
       * @returns OK
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    /**
     * 譜面のピックアップを追加します
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * 譜面のピックアップを追加します
     * @returns OK
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
