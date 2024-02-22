import { AxiosResponse } from 'axios'
import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query'

import { remove } from '@services'
import { IWishlistBase } from '@types'

const useDeleteFromWishlist = (
  path: string,
  userId: string
): UseMutationResult<AxiosResponse['status'], Error, Pick<IWishlistBase, 'id'>, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse['status'], Error, Pick<IWishlistBase, 'id'>, unknown>({
    mutationFn: ({ id }: Pick<IWishlistBase, 'id'>): Promise<AxiosResponse['status']> =>
      remove(path, id),
    onSuccess: (deleteStatus: number, { id }: Pick<IWishlistBase, 'id'>) => {
      queryClient.setQueryData(['wishlist', userId], (oldData: IWishlistBase[]) =>
        deleteStatus === 200 ? oldData.filter((value: IWishlistBase) => value.id !== id) : oldData
      )
    },
  })
}

export default useDeleteFromWishlist
