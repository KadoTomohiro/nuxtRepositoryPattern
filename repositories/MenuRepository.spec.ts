import { NuxtAxiosInstance } from '@nuxtjs/axios'
import axios from 'axios'
import UserRepository from '~/repositories/UserRepository'
import { users } from '~/plugins/AxiosAdapter/MockData'

jest.mock('axios')
const mockNuxtAxios = axios as jest.Mocked<NuxtAxiosInstance>

describe('MenuRepository', () => {
  it('全件取得リクエストできること', async () => {
    const repository = new UserRepository(mockNuxtAxios)
    mockNuxtAxios.$get = jest.fn().mockResolvedValueOnce(users)

    expect(await repository.getAll()).toEqual(users)
  })
})
