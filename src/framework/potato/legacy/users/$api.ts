/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_userId@string'
// prettier-ignore
import { Methods as Methods1 } from './_userId@string/levels/_levelName@string'
// prettier-ignore
import { Methods as Methods2 } from './_userId@string/levels/list'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:5000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users'
  const PATH1 = '/levels'
  const PATH2 = '/levels/list'
  const GET = 'GET'
  const PATCH = 'PATCH'

  return {
    _userId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        levels: {
          _levelName: (val2: string) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

            return {
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
                fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
                fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ 背景一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ 背景一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
              `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * 指定したユーザー情報を取得します
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 指定したユーザー情報を取得します
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * 指定したuser情報を編集します
         */
        patch: (option: { body: Methods0['patch']['reqBody'], config?: T }) =>
          fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).send(),
        /**
         * 指定したuser情報を編集します
         */
        $patch: (option: { body: Methods0['patch']['reqBody'], config?: T }) =>
          fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
