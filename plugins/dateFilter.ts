import { Context } from '@nuxt/types/app'
import Vue from 'vue'

export default function (context: Context) {
  Vue.filter('date', (value: any, format: string = 'YYYY-MM-DD') => {
    return context.$moment(value).format(format)
  })
}
