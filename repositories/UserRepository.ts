import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Gender, GenderCode, User } from '~/types/User'
import { Replace } from '~/types/UtilTypes'

interface UserApiDiff {
  birthDay: string
  gender: GenderCode
}

export type UserApiPayload = Replace<User, UserApiDiff>

export default class UserRepository {
  constructor(private $axios: NuxtAxiosInstance) {}

  private endpoint = '/user'

  getAll(): Promise<User[]> {
    return this.$axios
      .$get<UserApiPayload[]>(this.endpoint)
      .then((useApiResponses) => useApiResponses.map(this.convertPayloadToUser))
  }

  get(id: string): Promise<User> {
    const url = `${this.endpoint}/${id}`
    return this.$axios.$get<UserApiPayload>(url).then(this.convertPayloadToUser)
  }

  query(params: { [key: string]: any }): Promise<User[]> {
    return this.$axios
      .$get<UserApiPayload[]>(this.endpoint, { params })
      .then((users) => users.map(this.convertPayloadToUser))
  }

  register(user: User): Promise<string> {
    return this.$axios.$post<string>(this.endpoint, {
      data: this.convertUserToPayload(user),
    })
  }

  update(user: User): Promise<void> {
    const url = `${this.endpoint}/${user.id}`
    return this.$axios.$put<void>(url, {
      data: this.convertUserToPayload(user),
    })
  }

  delete(id: string): Promise<void> {
    const url = `${this.endpoint}/${id}`
    return this.$axios.$delete<void>(url)
  }

  private convertPayloadToUser(payload: UserApiPayload): User {
    const diff = {
      birthDay: new Date(payload.birthDay),
      gender: new Gender(payload.gender),
    }
    return Object.assign(payload, diff)
  }

  private convertUserToPayload(user: User): UserApiPayload {
    const diff = {
      birthDay: 'YYYYMMDD',
      gender: user.gender.code,
    }
    return Object.assign(user, diff)
  }
}
