import { add, get } from '@practice-three/services'
import { TUser } from '@practice-three/types'

export const register = async (path: string, user: TUser): Promise<TUser> => {
  const { email } = user
  const users: TUser[] = await get(path, { params: { email } })

  // Check register Email exist
  if (users.length) throw Error('This email already use by other client')

  return add<TUser>(path, user)
}

export const login = async (path: string, email: string, password: string): Promise<TUser> => {
  const users: TUser[] = await get(path, { params: { email, password } })

  if (!users.length) throw Error('Login fail, check email or password')

  return users[0]
}
