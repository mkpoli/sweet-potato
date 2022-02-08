/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_accountKey@string/backgrounds/_backgroundName@string'
// prettier-ignore
import { Methods as Methods1 } from './_accountKey@string/backgrounds/list'
// prettier-ignore
import { Methods as Methods2 } from './_accountKey@string/effects/_effectName@string'
// prettier-ignore
import { Methods as Methods3 } from './_accountKey@string/effects/list'
// prettier-ignore
import { Methods as Methods4 } from './_accountKey@string/engines/_engineName@string'
// prettier-ignore
import { Methods as Methods5 } from './_accountKey@string/engines/list'
// prettier-ignore
import { Methods as Methods6 } from './_accountKey@string/info'
// prettier-ignore
import { Methods as Methods7 } from './_accountKey@string/levels/_levelName@string'
// prettier-ignore
import { Methods as Methods8 } from './_accountKey@string/levels/announce'
// prettier-ignore
import { Methods as Methods9 } from './_accountKey@string/levels/announce_{announceName}'
// prettier-ignore
import { Methods as Methods10 } from './_accountKey@string/levels/debut'
// prettier-ignore
import { Methods as Methods11 } from './_accountKey@string/levels/favorite_{levelName}'
// prettier-ignore
import { Methods as Methods12 } from './_accountKey@string/levels/flick_{levelName}'
// prettier-ignore
import { Methods as Methods13 } from './_accountKey@string/levels/like_{levelName}'
// prettier-ignore
import { Methods as Methods14 } from './_accountKey@string/levels/list'
// prettier-ignore
import { Methods as Methods15 } from './_accountKey@string/levels/mylist'
// prettier-ignore
import { Methods as Methods16 } from './_accountKey@string/levels/pickups'
// prettier-ignore
import { Methods as Methods17 } from './_accountKey@string/levels/random'
// prettier-ignore
import { Methods as Methods18 } from './_accountKey@string/levels/rating_decrease_{levelName}'
// prettier-ignore
import { Methods as Methods19 } from './_accountKey@string/levels/rating_increase_{levelName}'
// prettier-ignore
import { Methods as Methods20 } from './_accountKey@string/levels/unfavorite_{levelName}'
// prettier-ignore
import { Methods as Methods21 } from './_accountKey@string/particles/_particleName@string'
// prettier-ignore
import { Methods as Methods22 } from './_accountKey@string/particles/list'
// prettier-ignore
import { Methods as Methods23 } from './_accountKey@string/skins/_skinName@string'
// prettier-ignore
import { Methods as Methods24 } from './_accountKey@string/skins/list'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:5000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/accounts'
  const PATH1 = '/backgrounds'
  const PATH2 = '/backgrounds/list'
  const PATH3 = '/effects'
  const PATH4 = '/effects/list'
  const PATH5 = '/engines'
  const PATH6 = '/engines/list'
  const PATH7 = '/info'
  const PATH8 = '/levels'
  const PATH9 = '/levels/announce'
  const PATH10 = '/levels/announce_{announceName}'
  const PATH11 = '/levels/debut'
  const PATH12 = '/levels/favorite_{levelName}'
  const PATH13 = '/levels/flick_{levelName}'
  const PATH14 = '/levels/like_{levelName}'
  const PATH15 = '/levels/list'
  const PATH16 = '/levels/mylist'
  const PATH17 = '/levels/pickups'
  const PATH18 = '/levels/random'
  const PATH19 = '/levels/rating_decrease_{levelName}'
  const PATH20 = '/levels/rating_increase_{levelName}'
  const PATH21 = '/levels/unfavorite_{levelName}'
  const PATH22 = '/particles'
  const PATH23 = '/particles/list'
  const PATH24 = '/skins'
  const PATH25 = '/skins/list'
  const GET = 'GET'

  return {
    _accountKey: (val0: string) => {
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
                fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified background info
               * It will raise 404 if the background is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ 背景一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ 背景一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
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
                fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified effect info
               * It will raise 404 if the effect is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ エフェクト一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ エフェクト一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
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
                fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified engine info
               * It will raise 404 if the engine is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ エンジン一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix0}${PATH6}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ エンジン一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix0}${PATH6}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
              `${prefix}${prefix0}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        info: {
          /**
           * ユーザー個別の情報一覧を返します
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix0}${PATH7}`, GET, option).json(),
          /**
           * ユーザー個別の情報一覧を返します
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix0}${PATH7}`, GET, option).json().then(r => r.body),
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
                fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          announce: {
            /**
             * 現在のアナウンス一覧を取得します
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix0}${PATH9}`, GET, option).json(),
            /**
             * 現在のアナウンス一覧を取得します
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix0}${PATH9}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH9}`
          },
          announce__announceName_: {
            /**
             * 指定されたアナウンス情報を表示します
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix0}${PATH10}`, GET, option).json(),
            /**
             * 指定されたアナウンス情報を表示します
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix0}${PATH10}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH10}`
          },
          debut: {
            /**
             * 新規譜面作者の譜面のみを返すエンドポイント
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix0}${PATH11}`, GET, option).json(),
            /**
             * 新規譜面作者の譜面のみを返すエンドポイント
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix0}${PATH11}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH11}`
          },
          favorite__levelName_: {
            /**
             * It returns specified level info
             * It will raise 404 if the level is not registered in this server
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix0}${PATH12}`, GET, option).json(),
            /**
             * It returns specified level info
             * It will raise 404 if the level is not registered in this server
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix0}${PATH12}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH12}`
          },
          flick__levelName_: {
            /**
             * 譜面のノーツ部分をゴリ押しでフリックのみに差し替えた特殊な譜面を取得する
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix0}${PATH13}`, GET, option).json(),
            /**
             * 譜面のノーツ部分をゴリ押しでフリックのみに差し替えた特殊な譜面を取得する
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix0}${PATH13}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH13}`
          },
          like__levelName_: {
            /**
             * It returns specified level info
             * It will raise 404 if the level is not registered in this server
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix0}${PATH14}`, GET, option).json(),
            /**
             * It returns specified level info
             * It will raise 404 if the level is not registered in this server
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix0}${PATH14}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH14}`
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ 譜面一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
              fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix0}${PATH15}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ 譜面一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
              fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix0}${PATH15}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods14['get']['query'] }) =>
              `${prefix}${prefix0}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          mylist: {
            /**
             * 対象の鍵を持つユーザーのマイリストを取得します
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, `${prefix0}${PATH16}`, GET, option).json(),
            /**
             * 対象の鍵を持つユーザーのマイリストを取得します
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, `${prefix0}${PATH16}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH16}`
          },
          pickups: {
            /**
             * 管理者の指定したおすすめ譜面などを返すエンドポイント
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix0}${PATH17}`, GET, option).json(),
            /**
             * 管理者の指定したおすすめ譜面などを返すエンドポイント
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix0}${PATH17}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH17}`
          },
          random: {
            /**
             * ランダムな譜面を取得します
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, `${prefix0}${PATH18}`, GET, option).json(),
            /**
             * ランダムな譜面を取得します
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, `${prefix0}${PATH18}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH18}`
          },
          rating_decrease__levelName_: {
            /**
             * It returns specified level info
             * It will raise 404 if the level is not registered in this server
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, `${prefix0}${PATH19}`, GET, option).json(),
            /**
             * It returns specified level info
             * It will raise 404 if the level is not registered in this server
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, `${prefix0}${PATH19}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH19}`
          },
          rating_increase__levelName_: {
            /**
             * It returns specified level info
             * It will raise 404 if the level is not registered in this server
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, `${prefix0}${PATH20}`, GET, option).json(),
            /**
             * It returns specified level info
             * It will raise 404 if the level is not registered in this server
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, `${prefix0}${PATH20}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH20}`
          },
          unfavorite__levelName_: {
            /**
             * It returns specified level info
             * It will raise 404 if the level is not registered in this server
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, `${prefix0}${PATH21}`, GET, option).json(),
            /**
             * It returns specified level info
             * It will raise 404 if the level is not registered in this server
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, `${prefix0}${PATH21}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH21}`
          }
        },
        particles: {
          _particleName: (val2: string) => {
            const prefix2 = `${prefix0}${PATH22}/${val2}`

            return {
              /**
               * It returns specified particle info
               * It will raise 404 if the particle is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified particle info
               * It will raise 404 if the particle is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ パーティクル一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods22['get']['query'], config?: T }) =>
              fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, `${prefix0}${PATH23}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ パーティクル一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods22['get']['query'], config?: T }) =>
              fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, `${prefix0}${PATH23}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods22['get']['query'] }) =>
              `${prefix}${prefix0}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        skins: {
          _skinName: (val2: string) => {
            const prefix2 = `${prefix0}${PATH24}/${val2}`

            return {
              /**
               * It returns specified skin info
               * It will raise 404 if the skin is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * It returns specified skin info
               * It will raise 404 if the skin is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          list: {
            /**
             * ユーザー個別用エンドポイント/ スキン一覧を返す
             * @returns OK
             */
            get: (option?: { query?: Methods24['get']['query'], config?: T }) =>
              fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, `${prefix0}${PATH25}`, GET, option).json(),
            /**
             * ユーザー個別用エンドポイント/ スキン一覧を返す
             * @returns OK
             */
            $get: (option?: { query?: Methods24['get']['query'], config?: T }) =>
              fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, `${prefix0}${PATH25}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods24['get']['query'] }) =>
              `${prefix}${prefix0}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
