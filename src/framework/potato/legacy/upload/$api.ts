/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:5000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/upload'
  const POST = 'POST'

  return {
    /**
     * ファイルのアップロードを受け付ける
     * (投稿から1時間以上使用されないファイルは自動削除したい)
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
    /**
     * ファイルのアップロードを受け付ける
     * (投稿から1時間以上使用されないファイルは自動削除したい)
     * @returns OK
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
