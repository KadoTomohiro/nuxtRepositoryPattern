import { Context, Inject } from '@nuxt/types/app'

export interface Repositories {}

export default function (context: Context, inject: Inject) {
  const repositories: Repositories = {}

  // Nuxtコンテキストにおいて、this.$repositoriesが使用可能になる
  inject('repositories', repositories)
}
