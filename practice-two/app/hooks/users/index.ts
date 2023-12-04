import { UseMutationResult, useMutation } from '@tanstack/react-query'

import { add, login, register } from '@services'
import { IAddress, ICard, IUser } from '@types'
import { useOrderStore } from '@stores'

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
  const addAddress = useOrderStore((state) => state.addAddress)

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
  const addCard = useOrderStore((state) => state.addCard)

  return useMutation<ICard, Error, Omit<ICard, 'id'>, unknown>({
    mutationFn: (data: Omit<ICard, 'id'>): Promise<ICard> => add<ICard>(path, data),
    onSuccess: (data: ICard) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, userId, ...card } = data
      addCard(card)
    },
  })
}
