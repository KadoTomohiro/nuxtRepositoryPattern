const gender = {
  '1': '男性',
  '2': '女性',
} as const

export type GenderCode = keyof typeof gender

export class Gender {
  constructor(public code: GenderCode) {}

  get label(): string {
    return gender[this.code]
  }
}

export interface User {
  id: string
  name: string
  birthDay: Date
  gender: Gender
}
