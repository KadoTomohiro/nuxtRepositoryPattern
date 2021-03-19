import { Repositories } from '~/plugins/repositories'

// Vueインターフェースに$repositoriesプロパティを追加
declare module 'vue/types/vue' {
  interface Vue {
    readonly $repositories: Repositories
  }
}

// Vuexインターフェースに$repositoriesプロパティを追加
declare module 'vuex' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  interface Store<S> {
    readonly $repositories: Repositories
  }
}
