/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_levelName@string'
// prettier-ignore
import { Methods as Methods2 } from './announce'
// prettier-ignore
import { Methods as Methods3 } from './announce_{announceName}'
// prettier-ignore
import { Methods as Methods4 } from './debut'
// prettier-ignore
import { Methods as Methods5 } from './list'
// prettier-ignore
import { Methods as Methods6 } from './pickups'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:5000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/levels'
  const PATH1 = '/levels/announce'
  const PATH2 = '/levels/announce_{announceName}'
  const PATH3 = '/levels/debut'
  const PATH4 = '/levels/list'
  const PATH5 = '/levels/pickups'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _levelName: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * It returns specified level info
         * It will raise 404 if the level is not registered in this server
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * It returns specified level info
         * It will raise 404 if the level is not registered in this server
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * 指定されたlevelを編集します
         * @returns OK
         */
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * 指定されたlevelを編集します
         * @returns OK
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        /**
         * 指定されたレベルを削除します
         */
        delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * 指定されたレベルを削除します
         */
        $delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    announce: {
      /**
       * 現在のアナウンス一覧を取得します
       * @returns OK
       */
      get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 現在のアナウンス一覧を取得します
       * @returns OK
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    announce__announceName_: {
      /**
       * 指定されたアナウンス情報を表示します
       * @returns OK
       */
      get: (option?: { config?: T }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 指定されたアナウンス情報を表示します
       * @returns OK
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    debut: {
      /**
       * 新規譜面作者の譜面のみを返すエンドポイント
       * @returns OK
       */
      get: (option?: { config?: T }) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * 新規譜面作者の譜面のみを返すエンドポイント
       * @returns OK
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    list: {
      /**
       * It returns list of level infos registered in this server
       * Also it can search using query params
       * @returns OK
       */
      get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * It returns list of level infos registered in this server
       * Also it can search using query params
       * @returns OK
       */
      $get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    pickups: {
      /**
       * 管理者の指定したおすすめ譜面などを返すエンドポイント
       * @returns OK
       */
      get: (option?: { config?: T }) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * 管理者の指定したおすすめ譜面などを返すエンドポイント
       * @returns OK
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    },
    /**
     * 指定された譜面情報をサーバーに登録します
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * 指定された譜面情報をサーバーに登録します
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
