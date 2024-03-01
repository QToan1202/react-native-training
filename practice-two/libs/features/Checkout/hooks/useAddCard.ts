import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query'
import { ToastAndroid } from 'react-native'

import { add, ICard, useOrderStore } from '@practice-two/shared'

const useAddCard = (path: string): UseMutationResult<ICard, Error, Omit<ICard, 'id'>, unknown> => {
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
export default useAddCard
