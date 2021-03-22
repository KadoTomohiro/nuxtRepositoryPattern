import { Context, Inject } from '@nuxt/types/app'
import UserRepository from '~/repositories/UserRepository'

export interface Repositories {
  user: UserRepository
}

export default function (context: Context, inject: Inject) {
  const user = new UserRepository(context.$axios)
  const repositories: Repositories = {
    user,
  }

  // Nuxtコンテキストにおいて、this.$repositoriesが使用可能になる
  inject('repositories', repositories)
}
