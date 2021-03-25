import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Gender, GenderCode, User } from '~/types/User'
import { Replace } from '~/types/UtilTypes'

interface UserApiDiff {
  birthDay: string
  gender: GenderCode
}

export type UserApiPayload = Replace<User, UserApiDiff>

type UserQuery = { [key: string]: any }

export default class UserRepository {
  constructor(private $axios: NuxtAxiosInstance) {}

  private path = '/user'

  getAll(): Promise<User[]> {
    return this.$axios
      .$get<UserApiPayload[]>(this.path)
      .then((useApiResponses) => useApiResponses.map(this.convertPayloadToUser))
  }

  get(id: string): Promise<User> {
    const url = `${this.path}/${id}`
    return this.$axios.$get<UserApiPayload>(url).then(this.convertPayloadToUser)
  }

  query(params: UserQuery): Promise<User[]> {
    return this.$axios
      .$get<UserApiPayload[]>(this.path, { params })
      .then((users) => users.map(this.convertPayloadToUser))
  }

  register(user: User): Promise<string> {
    return this.$axios.$post<string>(this.path, {
      data: this.convertUserToPayload(user),
    })
    // .catch((error: AxiosError) => {
    //   const errorResponse = error.response
    //   if (errorResponse) {
    //     const { status, statusText } = errorResponse
    //
    //     if (status === 400 && statusText === 'ValidationError') {
    //       const error = new InvalidRequestError(
    //         errorResponse.data,
    //         'Invalid User Post Request'
    //       )
    //
    //       return Promise.reject(error)
    //     }
    //     throw new Error('network error in User Register')
    //   } else {
    //     throw new Error('network error in User Register')
    //   }
    // })      // .catch((error: AxiosError) => {
    //   const errorResponse = error.response
    //   if (errorResponse) {
    //     const { status, statusText } = errorResponse
    //
    //     if (status === 400 && statusText === 'ValidationError') {
    //       const error = new InvalidRequestError(
    //         errorResponse.data,
    //         'Invalid User Post Request'
    //       )
    //
    //       return Promise.reject(error)
    //     }
    //     throw new Error('network error in User Register')
    //   } else {
    //     throw new Error('network error in User Register')
    //   }
    // })
  }

  update(user: User): Promise<void> {
    const url = `${this.path}/${user.id}`
    return this.$axios.$put<void>(url, {
      data: this.convertUserToPayload(user),
    })
  }

  delete(id: string): Promise<void> {
    const url = `${this.path}/${id}`
    return this.$axios.$delete<void>(url)
  }

  private convertPayloadToUser(payload: UserApiPayload): User {
    const diff = {
      birthDay: new Date(payload.birthDay),
      gender: new Gender(payload.gender),
    }
    return Object.assign({}, payload, diff)
  }

  private convertUserToPayload(user: User): UserApiPayload {
    const birthDay = user.birthDay

    const diff = {
      birthDay: `${birthDay.getFullYear()}/${
        birthDay.getMonth() + 1
      }/${birthDay.getDate()}`,
      gender: user.gender.code,
    }
    return Object.assign({}, user, diff)
  }
}

// interface ErrorResponse {
//   type: string
// }

// interface ValidationErrorResponse extends ErrorResponse {
//   type: 'ValidationError'
//   invalids: { [key: string]: string }
// }
//
// class InvalidRequestError extends Error {
//   constructor(
//     public validationErrors: ValidationErrorResponse,
//     message: string
//   ) {
//     super(message)
//
//     if (Error.captureStackTrace) {
//       Error.captureStackTrace(this, InvalidRequestError)
//     }
//     this.name = 'InvalidRequestError'
//   }
// }
