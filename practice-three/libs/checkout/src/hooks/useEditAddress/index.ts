import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { edit } from '@practice-three/shared/service'

import { TAddress } from '../../types'

type TOmitProps = 'id'
type TMutationDFn = Partial<Omit<TAddress, TOmitProps>>

const useEditAddress = (
  path: string,
  id: string,
  userId: string
): UseMutationResult<TAddress, Error, TMutationDFn, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<TAddress, Error, TMutationDFn, unknown>({
    mutationFn: (data: TMutationDFn): Promise<TAddress> => {
      return edit<TAddress>(path, id, data)
    },
    onSuccess: (data: TAddress) => {
      queryClient.setQueryData(['address', id], (oldData: TAddress) =>
        oldData ? { ...oldData, ...data } : oldData
      )
    },
  })
}

export default useEditAddress
