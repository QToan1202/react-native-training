import bcrypt from 'bcrypt'

import { add, get } from '@practice-three/services'
import { TRegisterForm, TUser } from '@practice-three/types'

import { REGEX } from '../constants'

export const register = async (path: string, data: TRegisterForm): Promise<TUser> => {
  const { account, password, name } = data
  const isEmail = REGEX.EMAIL.test(account)
  const transformAccount = isEmail ? { email: account } : { phone: account }
  const users: TUser[] = await get(path, { params: transformAccount })
  const expectReturnUser: TUser | undefined = users.at(0)

  // Check register Email exist
  if (expectReturnUser)
    throw Error('This information already use by other client, try will other account')

  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const hashedPassword = await bcrypt.hash(password, salt)

  const userData: Omit<TUser, 'id'> = isEmail
    ? {
        name,
        email: account,
        phone: '',
        password: hashedPassword,
      }
    : {
        name,
        email: '',
        phone: account,
        password: hashedPassword,
      }

  return add<TUser>(path, userData)
}

export const login = async (path: string, account: string, password: string): Promise<TUser> => {
  const isEmail = REGEX.EMAIL.test(account)
  const transformData = isEmail
    ? {
        email: account,
      }
    : { phone: account }
  const users: TUser[] = await get(path, { params: transformData })
  const expectReturnUser: TUser | undefined = users.at(0)

  if (!expectReturnUser) throw Error('Login fail, check email or password')

  const isMatchPassword = await bcrypt.compare(password, expectReturnUser.password)

  if (!isMatchPassword) throw Error('Login fail, check email or password')

  return expectReturnUser
}
