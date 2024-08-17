import { AxiosResponse } from 'axios'
import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { remove } from '@practice-three/services'
import { TWishlistBase } from '@practice-three/types'

type TPickProps = 'id'
type TMutationFn = Partial<Pick<TWishlistBase, TPickProps>>

const useDeleteFromWishlist = (
  path: string,
  userId: string
): UseMutationResult<AxiosResponse['status'], Error, TMutationFn, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse['status'], Error, TMutationFn, unknown>({
    mutationFn: ({ id }: TMutationFn): Promise<AxiosResponse['status']> => {
      if (id) return remove(path, id)

      return remove(path, '')
    },
    onSuccess: (deleteStatus: number, { id }: TMutationFn) => {
      queryClient.setQueryData(['wishlist', userId], (oldData: TWishlistBase[]) =>
        deleteStatus === 200 ? oldData.filter((value: TWishlistBase) => value.id !== id) : oldData
      )
    },
  })
}

export default useDeleteFromWishlist
