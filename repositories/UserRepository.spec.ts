import { NuxtAxiosInstance } from '@nuxtjs/axios'
import axios from 'axios'
import UserRepository from '~/repositories/UserRepository'

const responseData = [
  {
    id: '1',
    name: '竹中 信雄',
    birthDay: '1994/11/22',
    gender: '1',
  },
  {
    id: '2',
    name: '甲田 友彦',
    birthDay: '1995/5/24',
    gender: '1',
  },
]

jest.mock('axios')
const mockNuxtAxios = axios as jest.Mocked<NuxtAxiosInstance>

describe('MenuRepository', () => {
  it('全件取得リクエストできること', async () => {
    const repository = new UserRepository(mockNuxtAxios)
    mockNuxtAxios.$get = jest.fn().mockResolvedValueOnce(responseData)
    const getSpy = jest.spyOn(mockNuxtAxios, '$get')

    const usersResponse = await repository.getAll()

    expect(getSpy).toHaveBeenCalledWith('/user')
    expect(usersResponse.length).toEqual(2)
    usersResponse.forEach((user, i) => {
      // レスポンスが正しく変換されているかテスト
      const responseUser = responseData[i]
      expect(user.id).toEqual(responseUser.id)
      expect(user.name).toEqual(responseUser.name)
      expect(user.birthDay).toEqual(new Date(responseUser.birthDay))
      expect(user.gender.code).toEqual(responseUser.gender)
    })
  })
})
