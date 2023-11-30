import { UseMutationResult, useMutation } from '@tanstack/react-query'

import { add, login, register } from '@services'
import { IAddress, IUser } from '@types'

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

export const useAddAddress = (
  path: string
): UseMutationResult<IAddress, Error, Omit<IAddress, 'id'>, unknown> => {
  return useMutation<IAddress, Error, Omit<IAddress, 'id'>, unknown>({
    mutationFn: (data: Omit<IAddress, 'id'>): Promise<IAddress> => add<IAddress>(path, data),
  })
}
