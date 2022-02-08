/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_effectName@string'
// prettier-ignore
import { Methods as Methods2 } from './list'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:5000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/effects'
  const PATH1 = '/effects/list'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _effectName: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * It returns specified effect info
         * It will raise 404 if the effect is not registered in this server
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * It returns specified effect info
         * It will raise 404 if the effect is not registered in this server
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * 指定されたeffectを編集します
         * @returns OK
         */
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * 指定されたeffectを編集します
         * @returns OK
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        /**
         * delete specified effect
         */
        delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * delete specified effect
         */
        $delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    list: {
      /**
       * It returns list of effect infos registered in this server
       * Also it can search using query params
       * @returns OK
       */
      get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * It returns list of effect infos registered in this server
       * Also it can search using query params
       * @returns OK
       */
      $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * 指定されたeffectをサーバーに登録します
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * 指定されたeffectをサーバーに登録します
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
