import MockAdapter from 'axios-mock-adapter'
import { Context } from '@nuxt/types/app'
import { users } from '~/plugins/AxiosAdapter/MockData'

export default function (ctx: Context) {
  const mock = new MockAdapter(ctx.$axios, { delayResponse: 200 })

  mock.onGet('/user').reply(200, users)
}
