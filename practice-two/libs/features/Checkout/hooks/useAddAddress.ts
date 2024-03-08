import { UseMutationResult, useMutation } from '@tanstack/react-query'

import { add } from '@practice-two/shared/services'
import { IAddress } from '@practice-two/shared/types'
import { useOrderStore } from '@practice-two/shared/stores'

const useAddAddress = (
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

export default useAddAddress
