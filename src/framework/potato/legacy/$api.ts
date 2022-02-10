/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './levels/_levelName@string'
// prettier-ignore
import { Methods as Methods1 } from './levels/list'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:5000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/levels'
  const PATH1 = '/levels/list'
  const GET = 'GET'
  const POST = 'POST'
  const PATCH = 'PATCH'

  return {
    levels: {
      _levelName: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * It returns specified level info
           * It will raise 404 if the level is not registered in this server
           * @returns OK
           */
          get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * It returns specified level info
           * It will raise 404 if the level is not registered in this server
           * @returns OK
           */
          $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定された譜面情報をサーバーに登録します
           */
          post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, prefix1, POST, option).send(),
          /**
           * 指定された譜面情報をサーバーに登録します
           */
          $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, prefix1, POST, option).send().then(r => r.body),
          /**
           * 指定されたlevelを編集します
           */
          patch: (option: { body: Methods0['patch']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          /**
           * 指定されたlevelを編集します
           */
          $patch: (option: { body: Methods0['patch']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      list: {
        /**
         * It returns list of level infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * It returns list of level infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
