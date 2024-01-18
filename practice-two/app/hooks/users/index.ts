import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { ToastAndroid } from 'react-native'

import { add, asyncStoreService, get, login, register } from '@services'
import { IAddress, ICard, IUser } from '@types'
import { useAuthStore, useOrderStore } from '@stores'

export const useLogin = (
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

export const useRegister = (path: string): UseMutationResult<IUser, Error, IUser, unknown> => {
  const loginFn = useAuthStore((state) => state.login)

  return useMutation<IUser, Error, IUser, unknown>({
    mutationFn: (data: IUser): Promise<IUser> => register(path, data),
    onError: (error: Error) => {
      ToastAndroid.show(error.message, ToastAndroid.LONG)
    },
    onSuccess: async (data: IUser) => {
      ToastAndroid.show('Register success!!!', ToastAndroid.LONG)
      await asyncStoreService.save('user', data, () => loginFn(data))
    },
  })
}

export const useAddAddress = (
  path: string
): UseMutationResult<IAddress, Error, Omit<IAddress, 'id'>, unknown> => {
  const addAddress = useOrderStore((state) => state.setAddress)

  return useMutation<IAddress, Error, Omit<IAddress, 'id'>, unknown>({
    mutationFn: (data: Omit<IAddress, 'id'>): Promise<IAddress> => add<IAddress>(path, data),
    onSuccess: (data: IAddress) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, userId, ...address } = data
      addAddress(address)
    },
  })
}

export const useAddCard = (
  path: string
): UseMutationResult<ICard, Error, Omit<ICard, 'id'>, unknown> => {
  const queryClient = useQueryClient()
  const addCard = useOrderStore((state) => state.setCard)

  return useMutation<ICard, Error, Omit<ICard, 'id'>, unknown>({
    mutationFn: (data: Omit<ICard, 'id'>): Promise<ICard> => add<ICard>(path, data),
    onSuccess: (data: ICard) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { userId, ...card } = data
      ToastAndroid.show(`New payment card ${card.name} have add success!!`, ToastAndroid.SHORT)
      addCard(card)
      queryClient.setQueryData(['cards', String(userId)], (oldData: ICard[]) =>
        oldData ? [...oldData, data] : oldData
      )
    },
    onError: (error: Error) => {
      ToastAndroid.show(error.message, ToastAndroid.LONG)
    },
  })
}

export const useGetCard = (path: string, userId: string): UseQueryResult<ICard[], Error> => {
  return useQuery<ICard[], Error, ICard[], string[]>({
    queryKey: ['cards', userId],
    queryFn: () => get(path),
  })
}
