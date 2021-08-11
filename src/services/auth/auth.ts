import { instance } from 'services/instance'
import { UserLoginRequest, UserResponse } from './type'

export const login = async (data: UserLoginRequest) => {
  const res = await instance.post<UserResponse>('auth/local', data)
  return res.data
}
