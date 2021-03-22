import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Gender, GenderCode, User } from '~/types/User'
import { Replace } from '~/types/UtilTypes'

interface UserApiDiff {
  birthDay: string
  gender: GenderCode
}

export type UserApi = Replace<User, UserApiDiff>

export default class UserRepository {
  constructor(private $axios: NuxtAxiosInstance) {}

  getAll(): Promise<User[]> {
    return this.$axios
      .$get<UserApi[]>('/user')
      .then((useApiResponses) => useApiResponses.map(this.convertUserApiToUser))
  }

  convertUserApiToUser(userApi: UserApi): User {
    const diff = {
      birthDay: new Date(userApi.birthDay),
      gender: new Gender(userApi.gender),
    }
    return Object.assign(userApi, diff)
  }
}
