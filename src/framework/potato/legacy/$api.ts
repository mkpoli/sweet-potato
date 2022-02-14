/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './levels/_levelName@string'
// prettier-ignore
import { Methods as Methods1 } from './levels/list'
// prettier-ignore
import { Methods as Methods2 } from './upload'
// prettier-ignore
import { Methods as Methods3 } from './users/_userId@string'
// prettier-ignore
import { Methods as Methods4 } from './users/_userId@string/levels/_levelName@string'
// prettier-ignore
import { Methods as Methods5 } from './users/_userId@string/levels/list'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:5000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/levels'
  const PATH1 = '/levels/list'
  const PATH2 = '/upload'
  const PATH3 = '/users'
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
    },
    upload: {
      /**
       * ファイルのアップロードを受け付ける
       * (投稿から1時間以上使用されないファイルは自動削除したい)
       * @returns OK
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option, 'FormData').json(),
      /**
       * ファイルのアップロードを受け付ける
       * (投稿から1時間以上使用されないファイルは自動削除したい)
       * @returns OK
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    users: {
      _userId: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          levels: {
            _levelName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH0}/${val3}`

              return {
                /**
                 * It returns specified level info
                 * It will raise 404 if the level is not registered in this server
                 * @returns OK
                 */
                get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
                  fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified level info
                 * It will raise 404 if the level is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
                  fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ 背景一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
                fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ 背景一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
                fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
                `${prefix}${prefix1}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          /**
           * 指定したユーザー情報を取得します
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 指定したユーザー情報を取得します
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定したuser情報を編集します
           */
          patch: (option: { body: Methods3['patch']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods3['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          /**
           * 指定したuser情報を編集します
           */
          $patch: (option: { body: Methods3['patch']['reqBody'], config?: T }) =>
            fetch<void, BasicHeaders, Methods3['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
