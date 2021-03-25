import { Context } from '@nuxt/types/app'
import Vue from 'vue'

export default function (context: Context) {
  Vue.filter('date', (value: any, format: string = 'YYYY年MM月DD日') => {
    return context.$moment(value).format(format)
  })
}
