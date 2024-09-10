import { AxiosResponse } from 'axios'
import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { remove } from '@practice-three/shared/service'

import { TAddress } from '../../types'
import { useAddressStore } from '../../contexts'

type TPickProps = 'id'
type TMutationFn = Pick<TAddress, TPickProps>

const useDeleteAddress = (
  path: string,
  userId: string
): UseMutationResult<AxiosResponse['status'], Error, TMutationFn, unknown> => {
  const queryClient = useQueryClient()
  const deleteAddressToStore = useAddressStore((state) => state.delete)

  return useMutation<AxiosResponse['status'], Error, TMutationFn, unknown>({
    mutationFn: ({ id }: TMutationFn): Promise<AxiosResponse['status']> => {
      return remove(path, id)
    },
    onSuccess: (deleteStatus: number, { id }: TMutationFn) => {
      queryClient.setQueryData(['addresses', userId], (oldData: TAddress[]) =>
        deleteStatus === 200 && oldData
          ? oldData.filter((value: TAddress) => value.id !== id)
          : oldData
      )

      deleteStatus === 200 && deleteAddressToStore(id)
    },
  })
}

export default useDeleteAddress
