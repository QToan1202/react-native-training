import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { useToastController } from '@tamagui/toast'

import { TUser, TLoginForm } from '@practice-three/types'
import { useAuthStore } from '@practice-three/contexts'

import { login } from '../services'

const useLogin = (path: string): UseMutationResult<TUser, Error, TLoginForm, unknown> => {
  const toast = useToastController()
  const setUser = useAuthStore((state) => state.setUser)

  return useMutation<TUser, Error, TLoginForm, unknown>({
    mutationFn: ({ account, password }: TLoginForm): Promise<TUser> =>
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
