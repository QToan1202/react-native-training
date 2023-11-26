import { UseMutationResult, useMutation } from '@tanstack/react-query'

import { login, register } from '@services'
import { IUser } from '@types'

export const useLogin = (
  path: string
): UseMutationResult<IUser, Error, Pick<IUser, 'email' | 'password'>, unknown> => {
  return useMutation<IUser, Error, Pick<IUser, 'email' | 'password'>, unknown>({
    mutationFn: ({ email, password }: Pick<IUser, 'email' | 'password'>): Promise<IUser> =>
      login(path, email, password),
  })
}

export const useRegister = (path: string): UseMutationResult<IUser, Error, IUser, unknown> => {
  return useMutation<IUser, Error, IUser, unknown>({
    mutationFn: (data: IUser): Promise<IUser> => register(path, data),
  })
}
