import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { ToastAndroid } from 'react-native'

import { asyncStoreService, register } from '@services'
import { IUser } from '@types'
import { useAuthStore } from '@stores'

export const useRegister = (path: string): UseMutationResult<IUser, Error, IUser, unknown> => {
  const setUser = useAuthStore((state) => state.setUser)

  return useMutation<IUser, Error, IUser, unknown>({
    mutationFn: (data: IUser): Promise<IUser> => register(path, data),
    onError: (error: Error) => {
      ToastAndroid.show(error.message, ToastAndroid.LONG)
    },
    onSuccess: async (data: IUser) => {
      ToastAndroid.show('Register success!!!', ToastAndroid.LONG)
      await asyncStoreService.save('user', data, () => setUser(data))
    },
  })
}

export default useRegister
