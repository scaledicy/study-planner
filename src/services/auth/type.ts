export interface UserResponse {
  jwt: string
  user: User
}

export interface User {
  id: number
  username: string
  email: string
}

export interface UserLoginRequest {
  identifier: string
  password: string
}
