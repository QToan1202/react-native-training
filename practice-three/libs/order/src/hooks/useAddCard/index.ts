import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { add } from '@practice-three/shared/service'

import { TCard } from '../../types'
import { cardKeys } from '../../factories'

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
      queryClient.setQueryData(cardKeys.list(userId), (oldData: TCard[]) =>
        oldData ? [...oldData, data] : oldData
      )
    },
  })
}

export default useAddCard
