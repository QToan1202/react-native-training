import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { add } from '@shared/services'

import { TCard } from '../../types'

type TOmitProps = 'id'
type TMutationDFn = Partial<Omit<TCard, TOmitProps>>

const useAddCard = (
  path: string,
  userId: string
): UseMutationResult<TCard, Error, TMutationDFn, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<TCard, Error, TMutationDFn, unknown>({
    mutationFn: (data: TMutationDFn): Promise<TCard> => {
      return add<TCard>(path, { ...data, userId })
    },
    onSuccess: (data: TCard) => {
      queryClient.setQueryData(['cards', userId], (oldData: TCard[]) =>
        oldData ? [...oldData, data] : oldData
      )
    },
  })
}

export default useAddCard
