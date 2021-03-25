import { Plugin } from '@nuxt/types'
import { Context, Inject } from '@nuxt/types/app'

export interface DateUtility {
  get(dateFormatString: string): Date

  now(): Date
}
export default function (context: Context, inject: Inject) {
  const dateUtil: DateUtility = {
    get(dateFormatString: string): Date {
      return new Date(dateFormatString)
    },
    now(): Date {
      return new Date()
    },
  }
  inject('date', dateUtil)
}
