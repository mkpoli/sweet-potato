/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './accounts/_accountKey@string/backgrounds/_backgroundName@string'
// prettier-ignore
import { Methods as Methods1 } from './accounts/_accountKey@string/backgrounds/list'
// prettier-ignore
import { Methods as Methods2 } from './accounts/_accountKey@string/effects/_effectName@string'
// prettier-ignore
import { Methods as Methods3 } from './accounts/_accountKey@string/effects/list'
// prettier-ignore
import { Methods as Methods4 } from './accounts/_accountKey@string/engines/_engineName@string'
// prettier-ignore
import { Methods as Methods5 } from './accounts/_accountKey@string/engines/list'
// prettier-ignore
import { Methods as Methods6 } from './accounts/_accountKey@string/info'
// prettier-ignore
import { Methods as Methods7 } from './accounts/_accountKey@string/levels/_levelName@string'
// prettier-ignore
import { Methods as Methods8 } from './accounts/_accountKey@string/levels/announce'
// prettier-ignore
import { Methods as Methods9 } from './accounts/_accountKey@string/levels/announce_{announceName}'
// prettier-ignore
import { Methods as Methods10 } from './accounts/_accountKey@string/levels/debut'
// prettier-ignore
import { Methods as Methods11 } from './accounts/_accountKey@string/levels/favorite_{levelName}'
// prettier-ignore
import { Methods as Methods12 } from './accounts/_accountKey@string/levels/flick_{levelName}'
// prettier-ignore
import { Methods as Methods13 } from './accounts/_accountKey@string/levels/like_{levelName}'
// prettier-ignore
import { Methods as Methods14 } from './accounts/_accountKey@string/levels/list'
// prettier-ignore
import { Methods as Methods15 } from './accounts/_accountKey@string/levels/mylist'
// prettier-ignore
import { Methods as Methods16 } from './accounts/_accountKey@string/levels/pickups'
// prettier-ignore
import { Methods as Methods17 } from './accounts/_accountKey@string/levels/random'
// prettier-ignore
import { Methods as Methods18 } from './accounts/_accountKey@string/levels/rating_decrease_{levelName}'
// prettier-ignore
import { Methods as Methods19 } from './accounts/_accountKey@string/levels/rating_increase_{levelName}'
// prettier-ignore
import { Methods as Methods20 } from './accounts/_accountKey@string/levels/unfavorite_{levelName}'
// prettier-ignore
import { Methods as Methods21 } from './accounts/_accountKey@string/particles/_particleName@string'
// prettier-ignore
import { Methods as Methods22 } from './accounts/_accountKey@string/particles/list'
// prettier-ignore
import { Methods as Methods23 } from './accounts/_accountKey@string/skins/_skinName@string'
// prettier-ignore
import { Methods as Methods24 } from './accounts/_accountKey@string/skins/list'
// prettier-ignore
import { Methods as Methods25 } from './announces'
// prettier-ignore
import { Methods as Methods26 } from './announces/_announceName@string'
// prettier-ignore
import { Methods as Methods27 } from './announces/list'
// prettier-ignore
import { Methods as Methods28 } from './backgrounds'
// prettier-ignore
import { Methods as Methods29 } from './backgrounds/_backgroundName@string'
// prettier-ignore
import { Methods as Methods30 } from './backgrounds/list'
// prettier-ignore
import { Methods as Methods31 } from './effects'
// prettier-ignore
import { Methods as Methods32 } from './effects/_effectName@string'
// prettier-ignore
import { Methods as Methods33 } from './effects/list'
// prettier-ignore
import { Methods as Methods34 } from './engines'
// prettier-ignore
import { Methods as Methods35 } from './engines/_engineName@string'
// prettier-ignore
import { Methods as Methods36 } from './engines/list'
// prettier-ignore
import { Methods as Methods37 } from './info'
// prettier-ignore
import { Methods as Methods38 } from './levels'
// prettier-ignore
import { Methods as Methods39 } from './levels/_levelName@string'
// prettier-ignore
import { Methods as Methods40 } from './levels/announce'
// prettier-ignore
import { Methods as Methods41 } from './levels/announce_{announceName}'
// prettier-ignore
import { Methods as Methods42 } from './levels/debut'
// prettier-ignore
import { Methods as Methods43 } from './levels/list'
// prettier-ignore
import { Methods as Methods44 } from './levels/pickups'
// prettier-ignore
import { Methods as Methods45 } from './particles'
// prettier-ignore
import { Methods as Methods46 } from './particles/_particleName@string'
// prettier-ignore
import { Methods as Methods47 } from './particles/list'
// prettier-ignore
import { Methods as Methods48 } from './pickups'
// prettier-ignore
import { Methods as Methods49 } from './pickups/_pickupName@string'
// prettier-ignore
import { Methods as Methods50 } from './pickups/list'
// prettier-ignore
import { Methods as Methods51 } from './skins'
// prettier-ignore
import { Methods as Methods52 } from './skins/_skinName@string'
// prettier-ignore
import { Methods as Methods53 } from './skins/list'
// prettier-ignore
import { Methods as Methods54 } from './tests/_testId@string/backgrounds/_backgroundName@string'
// prettier-ignore
import { Methods as Methods55 } from './tests/_testId@string/backgrounds/list'
// prettier-ignore
import { Methods as Methods56 } from './tests/_testId@string/effects/_effectName@string'
// prettier-ignore
import { Methods as Methods57 } from './tests/_testId@string/effects/list'
// prettier-ignore
import { Methods as Methods58 } from './tests/_testId@string/engines/_engineName@string'
// prettier-ignore
import { Methods as Methods59 } from './tests/_testId@string/engines/list'
// prettier-ignore
import { Methods as Methods60 } from './tests/_testId@string/info'
// prettier-ignore
import { Methods as Methods61 } from './tests/_testId@string/levels/_levelName@string'
// prettier-ignore
import { Methods as Methods62 } from './tests/_testId@string/levels/list'
// prettier-ignore
import { Methods as Methods63 } from './tests/_testId@string/particles/_particleName@string'
// prettier-ignore
import { Methods as Methods64 } from './tests/_testId@string/particles/list'
// prettier-ignore
import { Methods as Methods65 } from './tests/_testId@string/skins/_skinName@string'
// prettier-ignore
import { Methods as Methods66 } from './tests/_testId@string/skins/list'
// prettier-ignore
import { Methods as Methods67 } from './upload'
// prettier-ignore
import { Methods as Methods68 } from './users'
// prettier-ignore
import { Methods as Methods69 } from './users/_userId@string'
// prettier-ignore
import { Methods as Methods70 } from './users/_userId@string/backgrounds/_backgroundName@string'
// prettier-ignore
import { Methods as Methods71 } from './users/_userId@string/backgrounds/list'
// prettier-ignore
import { Methods as Methods72 } from './users/_userId@string/effects/_effectName@string'
// prettier-ignore
import { Methods as Methods73 } from './users/_userId@string/effects/list'
// prettier-ignore
import { Methods as Methods74 } from './users/_userId@string/engines/_engineName@string'
// prettier-ignore
import { Methods as Methods75 } from './users/_userId@string/engines/list'
// prettier-ignore
import { Methods as Methods76 } from './users/_userId@string/info'
// prettier-ignore
import { Methods as Methods77 } from './users/_userId@string/levels/_levelName@string'
// prettier-ignore
import { Methods as Methods78 } from './users/_userId@string/levels/list'
// prettier-ignore
import { Methods as Methods79 } from './users/_userId@string/particles/_particleName@string'
// prettier-ignore
import { Methods as Methods80 } from './users/_userId@string/particles/list'
// prettier-ignore
import { Methods as Methods81 } from './users/_userId@string/skins/_skinName@string'
// prettier-ignore
import { Methods as Methods82 } from './users/_userId@string/skins/list'
// prettier-ignore
import { Methods as Methods83 } from './users/list'

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
  const PATH26 = '/announces'
  const PATH27 = '/announces/list'
  const PATH28 = '/pickups'
  const PATH29 = '/pickups/list'
  const PATH30 = '/tests'
  const PATH31 = '/upload'
  const PATH32 = '/users'
  const PATH33 = '/users/list'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    accounts: {
      _accountKey: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          backgrounds: {
            _backgroundName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH1}/${val3}`

              return {
                /**
                 * It returns specified background info
                 * It will raise 404 if the background is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified background info
                 * It will raise 404 if the background is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ 背景一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
                fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ 背景一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
                fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
                `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          effects: {
            _effectName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`

              return {
                /**
                 * It returns specified effect info
                 * It will raise 404 if the effect is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified effect info
                 * It will raise 404 if the effect is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ エフェクト一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
                fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ エフェクト一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
                fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
                `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          engines: {
            _engineName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH5}/${val3}`

              return {
                /**
                 * It returns specified engine info
                 * It will raise 404 if the engine is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified engine info
                 * It will raise 404 if the engine is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ エンジン一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
                fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ エンジン一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
                fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
                `${prefix}${prefix1}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          info: {
            /**
             * ユーザー個別の情報一覧を返します
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json(),
            /**
             * ユーザー個別の情報一覧を返します
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH7}`
          },
          levels: {
            _levelName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH8}/${val3}`

              return {
                /**
                 * It returns specified level info
                 * It will raise 404 if the level is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified level info
                 * It will raise 404 if the level is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            announce: {
              /**
               * 現在のアナウンス一覧を取得します
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json(),
              /**
               * 現在のアナウンス一覧を取得します
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH9}`
            },
            announce__announceName_: {
              /**
               * 指定されたアナウンス情報を表示します
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).json(),
              /**
               * 指定されたアナウンス情報を表示します
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH10}`
            },
            debut: {
              /**
               * 新規譜面作者の譜面のみを返すエンドポイント
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix1}${PATH11}`, GET, option).json(),
              /**
               * 新規譜面作者の譜面のみを返すエンドポイント
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix1}${PATH11}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH11}`
            },
            favorite__levelName_: {
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix1}${PATH12}`, GET, option).json(),
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `${prefix1}${PATH12}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH12}`
            },
            flick__levelName_: {
              /**
               * 譜面のノーツ部分をゴリ押しでフリックのみに差し替えた特殊な譜面を取得する
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json(),
              /**
               * 譜面のノーツ部分をゴリ押しでフリックのみに差し替えた特殊な譜面を取得する
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH13}`
            },
            like__levelName_: {
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix1}${PATH14}`, GET, option).json(),
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix1}${PATH14}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH14}`
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ 譜面一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
                fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix1}${PATH15}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ 譜面一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
                fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix1}${PATH15}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods14['get']['query'] }) =>
                `${prefix}${prefix1}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            },
            mylist: {
              /**
               * 対象の鍵を持つユーザーのマイリストを取得します
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, `${prefix1}${PATH16}`, GET, option).json(),
              /**
               * 対象の鍵を持つユーザーのマイリストを取得します
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, `${prefix1}${PATH16}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH16}`
            },
            pickups: {
              /**
               * 管理者の指定したおすすめ譜面などを返すエンドポイント
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix1}${PATH17}`, GET, option).json(),
              /**
               * 管理者の指定したおすすめ譜面などを返すエンドポイント
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix1}${PATH17}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH17}`
            },
            random: {
              /**
               * ランダムな譜面を取得します
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, `${prefix1}${PATH18}`, GET, option).json(),
              /**
               * ランダムな譜面を取得します
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, `${prefix1}${PATH18}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH18}`
            },
            rating_decrease__levelName_: {
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, `${prefix1}${PATH19}`, GET, option).json(),
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, `${prefix1}${PATH19}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH19}`
            },
            rating_increase__levelName_: {
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, `${prefix1}${PATH20}`, GET, option).json(),
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, `${prefix1}${PATH20}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH20}`
            },
            unfavorite__levelName_: {
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              get: (option?: { config?: T }) =>
                fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, `${prefix1}${PATH21}`, GET, option).json(),
              /**
               * It returns specified level info
               * It will raise 404 if the level is not registered in this server
               * @returns OK
               */
              $get: (option?: { config?: T }) =>
                fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, `${prefix1}${PATH21}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH21}`
            }
          },
          particles: {
            _particleName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH22}/${val3}`

              return {
                /**
                 * It returns specified particle info
                 * It will raise 404 if the particle is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified particle info
                 * It will raise 404 if the particle is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ パーティクル一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods22['get']['query'], config?: T }) =>
                fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, `${prefix1}${PATH23}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ パーティクル一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods22['get']['query'], config?: T }) =>
                fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, `${prefix1}${PATH23}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods22['get']['query'] }) =>
                `${prefix}${prefix1}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          skins: {
            _skinName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH24}/${val3}`

              return {
                /**
                 * It returns specified skin info
                 * It will raise 404 if the skin is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified skin info
                 * It will raise 404 if the skin is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ スキン一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods24['get']['query'], config?: T }) =>
                fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, `${prefix1}${PATH25}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ スキン一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods24['get']['query'], config?: T }) =>
                fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, `${prefix1}${PATH25}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods24['get']['query'] }) =>
                `${prefix}${prefix1}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        }
      }
    },
    announces: {
      _announceName: (val1: string) => {
        const prefix1 = `${PATH26}/${val1}`

        return {
          /**
           * 指定されたアナウンスデータを返す
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 指定されたアナウンスデータを返す
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定されたアナウンスを削除します
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods26['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * 指定されたアナウンスを削除します
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods26['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * 指定したアナウンスを編集します
           * @returns OK
           */
          patch: (option: { body: Methods26['patch']['reqBody'], config?: T }) =>
            fetch<Methods26['patch']['resBody'], BasicHeaders, Methods26['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * 指定したアナウンスを編集します
           * @returns OK
           */
          $patch: (option: { body: Methods26['patch']['reqBody'], config?: T }) =>
            fetch<Methods26['patch']['resBody'], BasicHeaders, Methods26['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      list: {
        /**
         * アナウンス中のデータ一覧を返す
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH27, GET, option).json(),
        /**
         * アナウンス中のデータ一覧を返す
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH27}`
      },
      /**
       * 譜面のピックアップを追加します
       * @returns OK
       */
      post: (option: { body: Methods25['post']['reqBody'], config?: T }) =>
        fetch<Methods25['post']['resBody'], BasicHeaders, Methods25['post']['status']>(prefix, PATH26, POST, option).json(),
      /**
       * 譜面のピックアップを追加します
       * @returns OK
       */
      $post: (option: { body: Methods25['post']['reqBody'], config?: T }) =>
        fetch<Methods25['post']['resBody'], BasicHeaders, Methods25['post']['status']>(prefix, PATH26, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH26}`
    },
    backgrounds: {
      _backgroundName: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * It returns specified background info
           * It will raise 404 if the background is not registered in this server
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * It returns specified background info
           * It will raise 404 if the background is not registered in this server
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定された背景情報を編集します
           * @returns OK
           */
          patch: (option: { body: Methods29['patch']['reqBody'], config?: T }) =>
            fetch<Methods29['patch']['resBody'], BasicHeaders, Methods29['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * 指定された背景情報を編集します
           * @returns OK
           */
          $patch: (option: { body: Methods29['patch']['reqBody'], config?: T }) =>
            fetch<Methods29['patch']['resBody'], BasicHeaders, Methods29['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * Delete specified background
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods29['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * Delete specified background
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods29['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      list: {
        /**
         * It returns list of background infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        get: (option?: { query?: Methods30['get']['query'], config?: T }) =>
          fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * It returns list of background infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        $get: (option?: { query?: Methods30['get']['query'], config?: T }) =>
          fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods30['get']['query'] }) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * 指定された背景情報をサーバーに登録します
       * @returns OK
       */
      post: (option: { body: Methods28['post']['reqBody'], config?: T }) =>
        fetch<Methods28['post']['resBody'], BasicHeaders, Methods28['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 指定された背景情報をサーバーに登録します
       * @returns OK
       */
      $post: (option: { body: Methods28['post']['reqBody'], config?: T }) =>
        fetch<Methods28['post']['resBody'], BasicHeaders, Methods28['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    effects: {
      _effectName: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          /**
           * It returns specified effect info
           * It will raise 404 if the effect is not registered in this server
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * It returns specified effect info
           * It will raise 404 if the effect is not registered in this server
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定されたeffectを編集します
           * @returns OK
           */
          patch: (option: { body: Methods32['patch']['reqBody'], config?: T }) =>
            fetch<Methods32['patch']['resBody'], BasicHeaders, Methods32['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * 指定されたeffectを編集します
           * @returns OK
           */
          $patch: (option: { body: Methods32['patch']['reqBody'], config?: T }) =>
            fetch<Methods32['patch']['resBody'], BasicHeaders, Methods32['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * delete specified effect
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods32['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * delete specified effect
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods32['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      list: {
        /**
         * It returns list of effect infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        get: (option?: { query?: Methods33['get']['query'], config?: T }) =>
          fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * It returns list of effect infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        $get: (option?: { query?: Methods33['get']['query'], config?: T }) =>
          fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods33['get']['query'] }) =>
          `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * 指定されたeffectをサーバーに登録します
       * @returns OK
       */
      post: (option: { body: Methods31['post']['reqBody'], config?: T }) =>
        fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * 指定されたeffectをサーバーに登録します
       * @returns OK
       */
      $post: (option: { body: Methods31['post']['reqBody'], config?: T }) =>
        fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    engines: {
      _engineName: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          /**
           * It returns specified engine info
           * It will raise 404 if the engine is not registered in this server
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * It returns specified engine info
           * It will raise 404 if the engine is not registered in this server
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定されたengineを編集します
           * @returns OK
           */
          patch: (option: { body: Methods35['patch']['reqBody'], config?: T }) =>
            fetch<Methods35['patch']['resBody'], BasicHeaders, Methods35['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * 指定されたengineを編集します
           * @returns OK
           */
          $patch: (option: { body: Methods35['patch']['reqBody'], config?: T }) =>
            fetch<Methods35['patch']['resBody'], BasicHeaders, Methods35['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * delete a engine
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods35['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * delete a engine
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods35['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      list: {
        /**
         * It returns list of engine infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        get: (option?: { query?: Methods36['get']['query'], config?: T }) =>
          fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, PATH6, GET, option).json(),
        /**
         * It returns list of engine infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        $get: (option?: { query?: Methods36['get']['query'], config?: T }) =>
          fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods36['get']['query'] }) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * 指定されたゲームエンジンをサーバーに登録します
       * @returns OK
       */
      post: (option: { body: Methods34['post']['reqBody'], config?: T }) =>
        fetch<Methods34['post']['resBody'], BasicHeaders, Methods34['post']['status']>(prefix, PATH5, POST, option).json(),
      /**
       * 指定されたゲームエンジンをサーバーに登録します
       * @returns OK
       */
      $post: (option: { body: Methods34['post']['reqBody'], config?: T }) =>
        fetch<Methods34['post']['resBody'], BasicHeaders, Methods34['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    },
    info: {
      /**
       * It returns small list of all infos registered in this server
       * (It should be trimed if the server has too many items)
       * @returns OK
       */
      get: (option?: { config?: T }) =>
        fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * It returns small list of all infos registered in this server
       * (It should be trimed if the server has too many items)
       * @returns OK
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH7}`
    },
    levels: {
      _levelName: (val1: string) => {
        const prefix1 = `${PATH8}/${val1}`

        return {
          /**
           * It returns specified level info
           * It will raise 404 if the level is not registered in this server
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * It returns specified level info
           * It will raise 404 if the level is not registered in this server
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定されたlevelを編集します
           * @returns OK
           */
          patch: (option: { body: Methods39['patch']['reqBody'], config?: T }) =>
            fetch<Methods39['patch']['resBody'], BasicHeaders, Methods39['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * 指定されたlevelを編集します
           * @returns OK
           */
          $patch: (option: { body: Methods39['patch']['reqBody'], config?: T }) =>
            fetch<Methods39['patch']['resBody'], BasicHeaders, Methods39['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * 指定されたレベルを削除します
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods39['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * 指定されたレベルを削除します
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods39['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      announce: {
        /**
         * 現在のアナウンス一覧を取得します
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, PATH9, GET, option).json(),
        /**
         * 現在のアナウンス一覧を取得します
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH9}`
      },
      announce__announceName_: {
        /**
         * 指定されたアナウンス情報を表示します
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods41['get']['resBody'], BasicHeaders, Methods41['get']['status']>(prefix, PATH10, GET, option).json(),
        /**
         * 指定されたアナウンス情報を表示します
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods41['get']['resBody'], BasicHeaders, Methods41['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH10}`
      },
      debut: {
        /**
         * 新規譜面作者の譜面のみを返すエンドポイント
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods42['get']['resBody'], BasicHeaders, Methods42['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * 新規譜面作者の譜面のみを返すエンドポイント
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods42['get']['resBody'], BasicHeaders, Methods42['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH11}`
      },
      list: {
        /**
         * It returns list of level infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        get: (option?: { query?: Methods43['get']['query'], config?: T }) =>
          fetch<Methods43['get']['resBody'], BasicHeaders, Methods43['get']['status']>(prefix, PATH15, GET, option).json(),
        /**
         * It returns list of level infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        $get: (option?: { query?: Methods43['get']['query'], config?: T }) =>
          fetch<Methods43['get']['resBody'], BasicHeaders, Methods43['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods43['get']['query'] }) =>
          `${prefix}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      pickups: {
        /**
         * 管理者の指定したおすすめ譜面などを返すエンドポイント
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods44['get']['resBody'], BasicHeaders, Methods44['get']['status']>(prefix, PATH17, GET, option).json(),
        /**
         * 管理者の指定したおすすめ譜面などを返すエンドポイント
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods44['get']['resBody'], BasicHeaders, Methods44['get']['status']>(prefix, PATH17, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH17}`
      },
      /**
       * 指定された譜面情報をサーバーに登録します
       * @returns OK
       */
      post: (option: { body: Methods38['post']['reqBody'], config?: T }) =>
        fetch<Methods38['post']['resBody'], BasicHeaders, Methods38['post']['status']>(prefix, PATH8, POST, option).json(),
      /**
       * 指定された譜面情報をサーバーに登録します
       * @returns OK
       */
      $post: (option: { body: Methods38['post']['reqBody'], config?: T }) =>
        fetch<Methods38['post']['resBody'], BasicHeaders, Methods38['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH8}`
    },
    particles: {
      _particleName: (val1: string) => {
        const prefix1 = `${PATH22}/${val1}`

        return {
          /**
           * It returns specified particle info
           * It will raise 404 if the particle is not registered in this server
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * It returns specified particle info
           * It will raise 404 if the particle is not registered in this server
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定したparticleを編集します
           * @returns OK
           */
          patch: (option: { body: Methods46['patch']['reqBody'], config?: T }) =>
            fetch<Methods46['patch']['resBody'], BasicHeaders, Methods46['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * 指定したparticleを編集します
           * @returns OK
           */
          $patch: (option: { body: Methods46['patch']['reqBody'], config?: T }) =>
            fetch<Methods46['patch']['resBody'], BasicHeaders, Methods46['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * 指定されたパーティクルを削除する
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods46['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * 指定されたパーティクルを削除する
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods46['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      list: {
        /**
         * It returns list of particle infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        get: (option?: { query?: Methods47['get']['query'], config?: T }) =>
          fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, PATH23, GET, option).json(),
        /**
         * It returns list of particle infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        $get: (option?: { query?: Methods47['get']['query'], config?: T }) =>
          fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods47['get']['query'] }) =>
          `${prefix}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * 指定されたパーティクル情報をサーバーに登録します
       * @returns OK
       */
      post: (option: { body: Methods45['post']['reqBody'], config?: T }) =>
        fetch<Methods45['post']['resBody'], BasicHeaders, Methods45['post']['status']>(prefix, PATH22, POST, option).json(),
      /**
       * 指定されたパーティクル情報をサーバーに登録します
       * @returns OK
       */
      $post: (option: { body: Methods45['post']['reqBody'], config?: T }) =>
        fetch<Methods45['post']['resBody'], BasicHeaders, Methods45['post']['status']>(prefix, PATH22, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH22}`
    },
    pickups: {
      _pickupName: (val1: string) => {
        const prefix1 = `${PATH28}/${val1}`

        return {
          /**
           * 指定したピックアップを削除します
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods49['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * 指定したピックアップを削除します
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods49['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * 指定されたIDのピックアップを取得して返す
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 指定されたIDのピックアップを取得して返す
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      list: {
        /**
         * ピックアップ中のデータ一覧を返す
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, PATH29, GET, option).json(),
        /**
         * ピックアップ中のデータ一覧を返す
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, PATH29, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH29}`
      },
      /**
       * 譜面のピックアップを追加します
       * @returns OK
       */
      post: (option: { body: Methods48['post']['reqBody'], config?: T }) =>
        fetch<Methods48['post']['resBody'], BasicHeaders, Methods48['post']['status']>(prefix, PATH28, POST, option).json(),
      /**
       * 譜面のピックアップを追加します
       * @returns OK
       */
      $post: (option: { body: Methods48['post']['reqBody'], config?: T }) =>
        fetch<Methods48['post']['resBody'], BasicHeaders, Methods48['post']['status']>(prefix, PATH28, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH28}`
    },
    skins: {
      _skinName: (val1: string) => {
        const prefix1 = `${PATH24}/${val1}`

        return {
          /**
           * It returns specified skin info
           * It will raise 404 if the skin is not registered in this server
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods52['get']['resBody'], BasicHeaders, Methods52['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * It returns specified skin info
           * It will raise 404 if the skin is not registered in this server
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods52['get']['resBody'], BasicHeaders, Methods52['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定したskinを編集します
           * @returns OK
           */
          patch: (option: { body: Methods52['patch']['reqBody'], config?: T }) =>
            fetch<Methods52['patch']['resBody'], BasicHeaders, Methods52['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * 指定したskinを編集します
           * @returns OK
           */
          $patch: (option: { body: Methods52['patch']['reqBody'], config?: T }) =>
            fetch<Methods52['patch']['resBody'], BasicHeaders, Methods52['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * 指定されたスキンを削除します
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods52['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * 指定されたスキンを削除します
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods52['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      list: {
        /**
         * It returns list of skin infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        get: (option?: { query?: Methods53['get']['query'], config?: T }) =>
          fetch<Methods53['get']['resBody'], BasicHeaders, Methods53['get']['status']>(prefix, PATH25, GET, option).json(),
        /**
         * It returns list of skin infos registered in this server
         * Also it can search using query params
         * @returns OK
         */
        $get: (option?: { query?: Methods53['get']['query'], config?: T }) =>
          fetch<Methods53['get']['resBody'], BasicHeaders, Methods53['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods53['get']['query'] }) =>
          `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * 指定されたスキン情報をサーバーに登録します
       * @returns OK
       */
      post: (option: { body: Methods51['post']['reqBody'], config?: T }) =>
        fetch<Methods51['post']['resBody'], BasicHeaders, Methods51['post']['status']>(prefix, PATH24, POST, option).json(),
      /**
       * 指定されたスキン情報をサーバーに登録します
       * @returns OK
       */
      $post: (option: { body: Methods51['post']['reqBody'], config?: T }) =>
        fetch<Methods51['post']['resBody'], BasicHeaders, Methods51['post']['status']>(prefix, PATH24, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH24}`
    },
    tests: {
      _testId: (val1: string) => {
        const prefix1 = `${PATH30}/${val1}`

        return {
          backgrounds: {
            _backgroundName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH1}/${val3}`

              return {
                /**
                 * It returns specified background info
                 * It will raise 404 if the background is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods54['get']['resBody'], BasicHeaders, Methods54['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified background info
                 * It will raise 404 if the background is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods54['get']['resBody'], BasicHeaders, Methods54['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * 譜面テスト用エンドポイント/ 背景一覧を返す(一般の背景リストと同じのが返される)
               * @returns OK
               */
              get: (option?: { query?: Methods55['get']['query'], config?: T }) =>
                fetch<Methods55['get']['resBody'], BasicHeaders, Methods55['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
              /**
               * 譜面テスト用エンドポイント/ 背景一覧を返す(一般の背景リストと同じのが返される)
               * @returns OK
               */
              $get: (option?: { query?: Methods55['get']['query'], config?: T }) =>
                fetch<Methods55['get']['resBody'], BasicHeaders, Methods55['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods55['get']['query'] }) =>
                `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          effects: {
            _effectName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`

              return {
                /**
                 * It returns specified effect info
                 * It will raise 404 if the effect is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods56['get']['resBody'], BasicHeaders, Methods56['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified effect info
                 * It will raise 404 if the effect is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods56['get']['resBody'], BasicHeaders, Methods56['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * 譜面テスト用エンドポイント/ エフェクト一覧を返す(一般のエフェクトリストと同じのが返される)
               * @returns OK
               */
              get: (option?: { query?: Methods57['get']['query'], config?: T }) =>
                fetch<Methods57['get']['resBody'], BasicHeaders, Methods57['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
              /**
               * 譜面テスト用エンドポイント/ エフェクト一覧を返す(一般のエフェクトリストと同じのが返される)
               * @returns OK
               */
              $get: (option?: { query?: Methods57['get']['query'], config?: T }) =>
                fetch<Methods57['get']['resBody'], BasicHeaders, Methods57['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods57['get']['query'] }) =>
                `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          engines: {
            _engineName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH5}/${val3}`

              return {
                /**
                 * It returns specified engine info
                 * It will raise 404 if the engine is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods58['get']['resBody'], BasicHeaders, Methods58['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified engine info
                 * It will raise 404 if the engine is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods58['get']['resBody'], BasicHeaders, Methods58['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * 譜面テスト用エンドポイント/ エンジン一覧を返す(一般のエンジンリストと同じのが返される)
               * @returns OK
               */
              get: (option?: { query?: Methods59['get']['query'], config?: T }) =>
                fetch<Methods59['get']['resBody'], BasicHeaders, Methods59['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json(),
              /**
               * 譜面テスト用エンドポイント/ エンジン一覧を返す(一般のエンジンリストと同じのが返される)
               * @returns OK
               */
              $get: (option?: { query?: Methods59['get']['query'], config?: T }) =>
                fetch<Methods59['get']['resBody'], BasicHeaders, Methods59['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods59['get']['query'] }) =>
                `${prefix}${prefix1}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          info: {
            /**
             * テスト個別の情報一覧を返します
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods60['get']['resBody'], BasicHeaders, Methods60['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json(),
            /**
             * テスト個別の情報一覧を返します
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods60['get']['resBody'], BasicHeaders, Methods60['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH7}`
          },
          levels: {
            _levelName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH8}/${val3}`

              return {
                /**
                 * It returns specified level info
                 * It will raise 404 if the level is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods61['get']['resBody'], BasicHeaders, Methods61['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified level info
                 * It will raise 404 if the level is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods61['get']['resBody'], BasicHeaders, Methods61['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * 譜面テスト用エンドポイント/ 背景一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods62['get']['query'], config?: T }) =>
                fetch<Methods62['get']['resBody'], BasicHeaders, Methods62['get']['status']>(prefix, `${prefix1}${PATH15}`, GET, option).json(),
              /**
               * 譜面テスト用エンドポイント/ 背景一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods62['get']['query'], config?: T }) =>
                fetch<Methods62['get']['resBody'], BasicHeaders, Methods62['get']['status']>(prefix, `${prefix1}${PATH15}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods62['get']['query'] }) =>
                `${prefix}${prefix1}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          particles: {
            _particleName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH22}/${val3}`

              return {
                /**
                 * It returns specified particle info
                 * It will raise 404 if the particle is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods63['get']['resBody'], BasicHeaders, Methods63['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified particle info
                 * It will raise 404 if the particle is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods63['get']['resBody'], BasicHeaders, Methods63['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * 譜面テスト用エンドポイント/ パーティクル一覧を返す(一般の背景リストと同じのが返される)
               * @returns OK
               */
              get: (option?: { query?: Methods64['get']['query'], config?: T }) =>
                fetch<Methods64['get']['resBody'], BasicHeaders, Methods64['get']['status']>(prefix, `${prefix1}${PATH23}`, GET, option).json(),
              /**
               * 譜面テスト用エンドポイント/ パーティクル一覧を返す(一般の背景リストと同じのが返される)
               * @returns OK
               */
              $get: (option?: { query?: Methods64['get']['query'], config?: T }) =>
                fetch<Methods64['get']['resBody'], BasicHeaders, Methods64['get']['status']>(prefix, `${prefix1}${PATH23}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods64['get']['query'] }) =>
                `${prefix}${prefix1}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          skins: {
            _skinName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH24}/${val3}`

              return {
                /**
                 * It returns specified skin info
                 * It will raise 404 if the skin is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods65['get']['resBody'], BasicHeaders, Methods65['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified skin info
                 * It will raise 404 if the skin is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods65['get']['resBody'], BasicHeaders, Methods65['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * 譜面テスト用エンドポイント/ スキン一覧を返す(一般のスキンリストと同じのが返される)
               * @returns OK
               */
              get: (option?: { query?: Methods66['get']['query'], config?: T }) =>
                fetch<Methods66['get']['resBody'], BasicHeaders, Methods66['get']['status']>(prefix, `${prefix1}${PATH25}`, GET, option).json(),
              /**
               * 譜面テスト用エンドポイント/ スキン一覧を返す(一般のスキンリストと同じのが返される)
               * @returns OK
               */
              $get: (option?: { query?: Methods66['get']['query'], config?: T }) =>
                fetch<Methods66['get']['resBody'], BasicHeaders, Methods66['get']['status']>(prefix, `${prefix1}${PATH25}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods66['get']['query'] }) =>
                `${prefix}${prefix1}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        }
      }
    },
    upload: {
      /**
       * ファイルのアップロードを受け付ける
       * (投稿から1時間以上使用されないファイルは自動削除したい)
       * @returns OK
       */
      post: (option: { body: Methods67['post']['reqBody'], config?: T }) =>
        fetch<Methods67['post']['resBody'], BasicHeaders, Methods67['post']['status']>(prefix, PATH31, POST, option, 'FormData').json(),
      /**
       * ファイルのアップロードを受け付ける
       * (投稿から1時間以上使用されないファイルは自動削除したい)
       * @returns OK
       */
      $post: (option: { body: Methods67['post']['reqBody'], config?: T }) =>
        fetch<Methods67['post']['resBody'], BasicHeaders, Methods67['post']['status']>(prefix, PATH31, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH31}`
    },
    users: {
      _userId: (val1: string) => {
        const prefix1 = `${PATH32}/${val1}`

        return {
          backgrounds: {
            _backgroundName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH1}/${val3}`

              return {
                /**
                 * It returns specified background info
                 * It will raise 404 if the background is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods70['get']['resBody'], BasicHeaders, Methods70['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified background info
                 * It will raise 404 if the background is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods70['get']['resBody'], BasicHeaders, Methods70['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ 背景一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods71['get']['query'], config?: T }) =>
                fetch<Methods71['get']['resBody'], BasicHeaders, Methods71['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ 背景一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods71['get']['query'], config?: T }) =>
                fetch<Methods71['get']['resBody'], BasicHeaders, Methods71['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods71['get']['query'] }) =>
                `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          effects: {
            _effectName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`

              return {
                /**
                 * It returns specified effect info
                 * It will raise 404 if the effect is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods72['get']['resBody'], BasicHeaders, Methods72['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified effect info
                 * It will raise 404 if the effect is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods72['get']['resBody'], BasicHeaders, Methods72['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ エフェクト一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods73['get']['query'], config?: T }) =>
                fetch<Methods73['get']['resBody'], BasicHeaders, Methods73['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ エフェクト一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods73['get']['query'], config?: T }) =>
                fetch<Methods73['get']['resBody'], BasicHeaders, Methods73['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods73['get']['query'] }) =>
                `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          engines: {
            _engineName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH5}/${val3}`

              return {
                /**
                 * It returns specified engine info
                 * It will raise 404 if the engine is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods74['get']['resBody'], BasicHeaders, Methods74['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified engine info
                 * It will raise 404 if the engine is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods74['get']['resBody'], BasicHeaders, Methods74['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ エンジン一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods75['get']['query'], config?: T }) =>
                fetch<Methods75['get']['resBody'], BasicHeaders, Methods75['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ エンジン一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods75['get']['query'], config?: T }) =>
                fetch<Methods75['get']['resBody'], BasicHeaders, Methods75['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods75['get']['query'] }) =>
                `${prefix}${prefix1}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          info: {
            /**
             * ユーザー個別の情報一覧を返します
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods76['get']['resBody'], BasicHeaders, Methods76['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json(),
            /**
             * ユーザー個別の情報一覧を返します
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods76['get']['resBody'], BasicHeaders, Methods76['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH7}`
          },
          levels: {
            _levelName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH8}/${val3}`

              return {
                /**
                 * It returns specified level info
                 * It will raise 404 if the level is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods77['get']['resBody'], BasicHeaders, Methods77['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified level info
                 * It will raise 404 if the level is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods77['get']['resBody'], BasicHeaders, Methods77['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ 背景一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods78['get']['query'], config?: T }) =>
                fetch<Methods78['get']['resBody'], BasicHeaders, Methods78['get']['status']>(prefix, `${prefix1}${PATH15}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ 背景一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods78['get']['query'], config?: T }) =>
                fetch<Methods78['get']['resBody'], BasicHeaders, Methods78['get']['status']>(prefix, `${prefix1}${PATH15}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods78['get']['query'] }) =>
                `${prefix}${prefix1}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          particles: {
            _particleName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH22}/${val3}`

              return {
                /**
                 * It returns specified particle info
                 * It will raise 404 if the particle is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods79['get']['resBody'], BasicHeaders, Methods79['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified particle info
                 * It will raise 404 if the particle is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods79['get']['resBody'], BasicHeaders, Methods79['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ パーティクル一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods80['get']['query'], config?: T }) =>
                fetch<Methods80['get']['resBody'], BasicHeaders, Methods80['get']['status']>(prefix, `${prefix1}${PATH23}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ パーティクル一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods80['get']['query'], config?: T }) =>
                fetch<Methods80['get']['resBody'], BasicHeaders, Methods80['get']['status']>(prefix, `${prefix1}${PATH23}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods80['get']['query'] }) =>
                `${prefix}${prefix1}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          skins: {
            _skinName: (val3: string) => {
              const prefix3 = `${prefix1}${PATH24}/${val3}`

              return {
                /**
                 * It returns specified skin info
                 * It will raise 404 if the skin is not registered in this server
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods81['get']['resBody'], BasicHeaders, Methods81['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * It returns specified skin info
                 * It will raise 404 if the skin is not registered in this server
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods81['get']['resBody'], BasicHeaders, Methods81['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            list: {
              /**
               * ユーザー個別用エンドポイント/ スキン一覧を返す
               * @returns OK
               */
              get: (option?: { query?: Methods82['get']['query'], config?: T }) =>
                fetch<Methods82['get']['resBody'], BasicHeaders, Methods82['get']['status']>(prefix, `${prefix1}${PATH25}`, GET, option).json(),
              /**
               * ユーザー個別用エンドポイント/ スキン一覧を返す
               * @returns OK
               */
              $get: (option?: { query?: Methods82['get']['query'], config?: T }) =>
                fetch<Methods82['get']['resBody'], BasicHeaders, Methods82['get']['status']>(prefix, `${prefix1}${PATH25}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods82['get']['query'] }) =>
                `${prefix}${prefix1}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          /**
           * 指定したユーザー情報を取得します
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods69['get']['resBody'], BasicHeaders, Methods69['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 指定したユーザー情報を取得します
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods69['get']['resBody'], BasicHeaders, Methods69['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定したuser情報を編集します
           * @returns OK
           */
          patch: (option: { body: Methods69['patch']['reqBody'], config?: T }) =>
            fetch<Methods69['patch']['resBody'], BasicHeaders, Methods69['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * 指定したuser情報を編集します
           * @returns OK
           */
          $patch: (option: { body: Methods69['patch']['reqBody'], config?: T }) =>
            fetch<Methods69['patch']['resBody'], BasicHeaders, Methods69['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * 指定したユーザーを削除します
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods69['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * 指定したユーザーを削除します
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods69['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      list: {
        /**
         * サーバーに登録されたユーザー一覧を返します
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods83['get']['resBody'], BasicHeaders, Methods83['get']['status']>(prefix, PATH33, GET, option).json(),
        /**
         * サーバーに登録されたユーザー一覧を返します
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods83['get']['resBody'], BasicHeaders, Methods83['get']['status']>(prefix, PATH33, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH33}`
      },
      /**
       * Add specified new user to server
       * @returns OK
       */
      post: (option: { body: Methods68['post']['reqBody'], config?: T }) =>
        fetch<Methods68['post']['resBody'], BasicHeaders, Methods68['post']['status']>(prefix, PATH32, POST, option).json(),
      /**
       * Add specified new user to server
       * @returns OK
       */
      $post: (option: { body: Methods68['post']['reqBody'], config?: T }) =>
        fetch<Methods68['post']['resBody'], BasicHeaders, Methods68['post']['status']>(prefix, PATH32, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH32}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
