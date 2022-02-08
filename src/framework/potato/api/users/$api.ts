/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_userId@string'
// prettier-ignore
import { Methods as Methods2 } from './_userId@string/backgrounds/_backgroundName@string'
// prettier-ignore
import { Methods as Methods3 } from './_userId@string/backgrounds/list'
// prettier-ignore
import { Methods as Methods4 } from './_userId@string/effects/_effectName@string'
// prettier-ignore
import { Methods as Methods5 } from './_userId@string/effects/list'
// prettier-ignore
import { Methods as Methods6 } from './_userId@string/engines/_engineName@string'
// prettier-ignore
import { Methods as Methods7 } from './_userId@string/engines/list'
// prettier-ignore
import { Methods as Methods8 } from './_userId@string/info'
// prettier-ignore
import { Methods as Methods9 } from './_userId@string/levels/_levelName@string'
// prettier-ignore
import { Methods as Methods10 } from './_userId@string/levels/list'
// prettier-ignore
import { Methods as Methods11 } from './_userId@string/particles/_particleName@string'
// prettier-ignore
import { Methods as Methods12 } from './_userId@string/particles/list'
// prettier-ignore
import { Methods as Methods13 } from './_userId@string/skins/_skinName@string'
// prettier-ignore
import { Methods as Methods14 } from './_userId@string/skins/list'
// prettier-ignore
import { Methods as Methods15 } from './list'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:5000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users'
  const PATH1 = '/backgrounds'
  const PATH2 = '/backgrounds/list'
  const PATH3 = '/effects'
  const PATH4 = '/effects/list'
  const PATH5 = '/engines'
  const PATH6 = '/engines/list'
  const PATH7 = '/info'
  const PATH8 = '/levels'
  const PATH9 = '/levels/list'
  const PATH10 = '/particles'
  const PATH11 = '/particles/list'
  const PATH12 = '/skins'
  const PATH13 = '/skins/list'
  const PATH14 = '/users/list'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _userId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        backgrounds: {
          _backgroundName: (val2: string) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

            return {
              /**
               * It returns specified background info
               * It will raise 404 if the background is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified background info
               * It will raise 404 if the background is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ 背景一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ 背景一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
              `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        effects: {
          _effectName: (val2: string) => {
            const prefix2 = `${prefix0}${PATH3}/${val2}`

            return {
              /**
               * It returns specified effect info
               * It will raise 404 if the effect is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified effect info
               * It will raise 404 if the effect is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ エフェクト一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ エフェクト一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
              `${prefix}${prefix0}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        engines: {
          _engineName: (val2: string) => {
            const prefix2 = `${prefix0}${PATH5}/${val2}`

            return {
              /**
               * It returns specified engine info
               * It will raise 404 if the engine is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified engine info
               * It will raise 404 if the engine is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ エンジン一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix0}${PATH6}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ エンジン一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix0}${PATH6}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods7['get']['query'] }) =>
              `${prefix}${prefix0}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        info: {
          /**
           * ユーザー個別の情報一覧を返します
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix0}${PATH7}`, GET, option).json(),
          /**
           * ユーザー個別の情報一覧を返します
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix0}${PATH7}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH7}`
        },
        levels: {
          _levelName: (val2: string) => {
            const prefix2 = `${prefix0}${PATH8}/${val2}`

            return {
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ 背景一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods10['get']['query'], config?: T }) =>
              fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix0}${PATH9}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ 背景一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods10['get']['query'], config?: T }) =>
              fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix0}${PATH9}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods10['get']['query'] }) =>
              `${prefix}${prefix0}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        particles: {
          _particleName: (val2: string) => {
            const prefix2 = `${prefix0}${PATH10}/${val2}`

            return {
              /**
               * It returns specified particle info
               * It will raise 404 if the particle is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified particle info
               * It will raise 404 if the particle is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ パーティクル一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods12['get']['query'], config?: T }) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix0}${PATH11}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ パーティクル一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods12['get']['query'], config?: T }) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix0}${PATH11}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods12['get']['query'] }) =>
              `${prefix}${prefix0}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        skins: {
          _skinName: (val2: string) => {
            const prefix2 = `${prefix0}${PATH12}/${val2}`

            return {
              /**
               * It returns specified skin info
               * It will raise 404 if the skin is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified skin info
               * It will raise 404 if the skin is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ スキン一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
              fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix0}${PATH13}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ スキン一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
              fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix0}${PATH13}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods14['get']['query'] }) =>
              `${prefix}${prefix0}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * 指定したユーザー情報を取得します
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 指定したユーザー情報を取得します
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * 指定したuser情報を編集します
         * @returns OK
         */
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * 指定したuser情報を編集します
         * @returns OK
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        /**
         * 指定したユーザーを削除します
         */
        delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * 指定したユーザーを削除します
         */
        $delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    list: {
      /**
       * サーバーに登録されたユーザー一覧を返します
       * @returns OK
       */
      get: (option?: { config?: T }) =>
        fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, PATH14, GET, option).json(),
      /**
       * サーバーに登録されたユーザー一覧を返します
       * @returns OK
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, PATH14, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH14}`
    },
    /**
     * Add specified new user to server
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * Add specified new user to server
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
