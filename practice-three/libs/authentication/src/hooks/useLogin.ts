import { UseMutationResult, useMutation } from '@tanstack/react-query'

import { TUser } from '@shared/types'
import { login } from '../services'
import { useToastController } from '@tamagui/toast'

const useLogin = (
  path: string
): UseMutationResult<TUser, Error, Pick<TUser, 'email' | 'password'>, unknown> => {
  const toast = useToastController()

  return useMutation<TUser, Error, Pick<TUser, 'email' | 'password'>, unknown>({
    mutationFn: ({ email, password }: Pick<TUser, 'email' | 'password'>): Promise<TUser> =>
      login(path, email, password),
    onError: (error) => {
      if (error instanceof Error)
        toast.show('Login fail!!!', {
          message: 'Recheck your entered credential',
        })
    },
  })
}

export default useLogin
