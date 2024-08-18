import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { useToastController } from '@tamagui/toast'

import { TUser } from '@practice-three/types'
import { useAuthStore } from '@practice-three/contexts'

import { login } from '../services'

const useLogin = (
  path: string
): UseMutationResult<TUser, Error, Pick<TUser, 'account' | 'password'>, unknown> => {
  const toast = useToastController()
  const setUser = useAuthStore((state) => state.setUser)

  return useMutation<TUser, Error, Pick<TUser, 'account' | 'password'>, unknown>({
    mutationFn: ({ account, password }: Pick<TUser, 'account' | 'password'>): Promise<TUser> =>
      login(path, account, password),
    onError: (error) => {
      if (error instanceof Error)
        toast.show('Login fail!!!', {
          message: error.message,
        })
    },
    onSuccess: (data: TUser) => {
      toast.show('Login success!!!', {
        message: 'Welcome back ',
      })
      setUser(data)
    },
  })
}

export default useLogin
