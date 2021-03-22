import { Context, Inject } from '@nuxt/types/app'
import moment from 'moment'

export default function (context: Context, inject: Inject) {
  inject('moment', moment)
}
