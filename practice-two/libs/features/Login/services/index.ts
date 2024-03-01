import { IUser, get } from '@practice-two/shared'

export const login = async (path: string, email: string, password: string): Promise<IUser> => {
  const users: IUser[] = await get(path, { params: { email } })

  if (!users.length) throw Error('Login fail, check email or password') // TODO: Extract to error message constant
  if (users.some((user: IUser) => user.password !== password))
    throw Error('Login fail, check email or password')

  return users[0]
}

export default login
