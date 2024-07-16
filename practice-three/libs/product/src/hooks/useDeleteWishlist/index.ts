import { AxiosResponse } from 'axios'
import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { remove } from '@shared/services'
import { TWishlistBase } from '@shared/types'

const useDeleteFromWishlist = (
  path: string,
  userId: string
): UseMutationResult<AxiosResponse['status'], Error, Pick<TWishlistBase, 'id'>, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse['status'], Error, Pick<TWishlistBase, 'id'>, unknown>({
    mutationFn: ({ id }: Pick<TWishlistBase, 'id'>): Promise<AxiosResponse['status']> =>
      remove(path, id),
    onSuccess: (deleteStatus: number, { id }: Pick<TWishlistBase, 'id'>) => {
      queryClient.setQueryData(['wishlist', userId], (oldData: TWishlistBase[]) =>
        deleteStatus === 200 ? oldData.filter((value: TWishlistBase) => value.id !== id) : oldData
      )
    },
  })
}

export default useDeleteFromWishlist
