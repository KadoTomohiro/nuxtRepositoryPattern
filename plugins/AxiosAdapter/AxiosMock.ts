import MockAdapter from 'axios-mock-adapter'
import { Context } from '@nuxt/types/app'
import { AxiosRequestConfig } from 'axios'
import { users } from '~/plugins/AxiosAdapter/MockData'

export default function (ctx: Context) {
  const mock = new MockAdapter(ctx.$axios, { delayResponse: 200 })

  mock.onGet('/user').reply(200, users)
  mock.onGet('/user/:id').reply((config: AxiosRequestConfig) => {
    const id = config.params.id
    return [200, users.find((user) => user.id === id)]
  })
}
