import { IUser, add, get } from '@practice-two/shared'

export const register = async (path: string, user: IUser): Promise<IUser> => {
  const { email } = user
  const users: IUser[] = await get(path, { params: { email } })

  // Check register Email exist
  if (users.length) throw Error('This email already use by other client') // TODO: Extract to error message constant

  return add<IUser>(path, user)
}

export const login = async (path: string, email: string, password: string): Promise<IUser> => {
  const users: IUser[] = await get(path, { params: { email } })

  if (!users.length) throw Error('Login fail, check email or password') // TODO: Extract to error message constant
  if (users.some((user: IUser) => user.password !== password))
    throw Error('Login fail, check email or password')

  return users[0]
}
