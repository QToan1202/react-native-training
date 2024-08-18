import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { useToastController } from '@tamagui/toast'

import { TUser } from '@shared/types'
import { useAuthStore } from '@shared/stores'

import { register } from '../services'

export const useRegister = (path: string): UseMutationResult<TUser, Error, TUser, unknown> => {
  const toast = useToastController()
  const setUser = useAuthStore((state) => state.setUser)

  return useMutation<TUser, Error, TUser, unknown>({
    mutationFn: (data: TUser): Promise<TUser> => register(path, data),
    onError: (error: Error) => {
      if (error instanceof Error)
        toast.show('Register fail!!!', {
          message: error.message,
        })
    },
    onSuccess: (data: TUser) => {
      toast.show('Register success!!!', {
        message: 'Welcome to E-com',
      })
      setUser(data)
    },
  })
}

export default useRegister
