import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { add } from '@practice-three/services'

import { TAddress } from '../../types'
import { useAddressStore } from '../../contexts'

type TOmitProps = 'id'
type TMutationDFn = Partial<Omit<TAddress, TOmitProps>>

const useAddAddress = (
  path: string,
  userId: string
): UseMutationResult<TAddress, Error, TMutationDFn, unknown> => {
  const queryClient = useQueryClient()
  const addAddressToStore = useAddressStore((state) => state.add)

  return useMutation<TAddress, Error, TMutationDFn, unknown>({
    mutationFn: (data: TMutationDFn): Promise<TAddress> => {
      return add<TAddress>(path, data)
    },
    onSuccess: (data: TAddress) => {
      queryClient.setQueryData(['addresses', userId], (oldData: TAddress[]) =>
        oldData ? [...oldData, data] : oldData
      )

      addAddressToStore(data.id)
    },
  })
}

export default useAddAddress
