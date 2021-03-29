import moment from 'moment'
import { Repositories } from '~/plugins/repositories'
import { DateUtility } from '~/plugins/date'
import Vue from 'vue'

// Vueインターフェースに$repositoriesプロパティを追加
declare module 'vue/types/vue' {
  interface Vue {
    readonly $repositories: Repositories
    readonly $moment: moment.Moment
    readonly $date: DateUtility
  }
}

declare module 'vue/types/options' {
  // eslint-disable-next-line
  interface ComponentOptions<V extends Vue> {
    readonly title: string
  }
}

// Vuexインターフェースに$repositoriesプロパティを追加
// Vuexインターフェースに$repositoriesプロパティを追加
declare module 'vuex' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  interface Store<S> {
    readonly $repositories: Repositories
    readonly $moment: moment.Moment
    readonly $date: DateUtility
  }
}

declare module '@nuxt/types' {
  interface Context {
    readonly $moment: typeof moment
  }
}
