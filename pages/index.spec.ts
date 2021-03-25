import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import index from './index.vue'
import { Gender, User } from '~/types/User'
const testUsers = [
  {
    id: '1',
    name: '竹中 信雄',
    birthDay: new Date('1994/11/22'),
    gender: new Gender('1'),
  },
  {
    id: '2',
    name: '甲田 友彦',
    birthDay: new Date('1995/5/24'),
    gender: new Gender('1'),
  },
  {
    id: '3',
    name: '小泉 道夫',
    birthDay: new Date('2001/12/21'),
    gender: new Gender('1'),
  },
  {
    id: '4',
    name: '速水 綾奈',
    birthDay: new Date('1996/5/16'),
    gender: new Gender('2'),
  },
  {
    id: '5',
    name: '宮田 咲奈',
    birthDay: new Date('1990/11/27'),
    gender: new Gender('2'),
  },
  {
    id: '6',
    name: '松井 結芽',
    birthDay: new Date('1974/6/3'),
    gender: new Gender('2'),
  },
  {
    id: '7',
    name: '二木 亮太',
    birthDay: new Date('1978/6/12'),
    gender: new Gender('1'),
  },
  {
    id: '8',
    name: '冨永 一華',
    birthDay: new Date('1998/3/12'),
    gender: new Gender('2'),
  },
  {
    id: '9',
    name: '脇坂 豊和',
    birthDay: new Date('2021/2/18'),
    gender: new Gender('1'),
  },
  {
    id: '10',
    name: '新 朋香',
    birthDay: new Date('1994/7/16'),
    gender: new Gender('2'),
  },
]

const mock = jest.fn()

const repositoryMock = {
  user: {
    getAll() {
      return mock
    },
  },
}

const getAllSpy = jest.spyOn(repositoryMock.user, 'getAll')

describe('index', () => {
  afterEach(() => {
    mock.mockClear()
  })

  it('初期表示時に、ユーザー一覧を取得すること', async () => {
    mock.mockResolvedValueOnce(testUsers)
    const wrapper = shallowMount(index, {
      mocks: {
        $repositories: repositoryMock,
      },
    })
    await flushPromises()

    expect(getAllSpy).toHaveBeenCalled()
    const users: User[] = wrapper.vm.$data.users
    expect(users.length).toEqual(10)
    users.forEach((user, index) => {
      expect(user).toEqual(testUsers[index])
    })
  })
})
