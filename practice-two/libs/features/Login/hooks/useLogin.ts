import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { ToastAndroid } from 'react-native'

import { login } from '@services'
import { IUser } from '@types'

const useLogin = (
  path: string
): UseMutationResult<IUser, Error, Pick<IUser, 'email' | 'password'>, unknown> => {
  return useMutation<IUser, Error, Pick<IUser, 'email' | 'password'>, unknown>({
    mutationFn: ({ email, password }: Pick<IUser, 'email' | 'password'>): Promise<IUser> =>
      login(path, email, password),
    onError: (error) => {
      if (error instanceof Error) ToastAndroid.show(error.message, ToastAndroid.LONG)
    },
  })
}

export default useLogin
