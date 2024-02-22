import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query'

import { add } from '@services'
import { IWishlistBase } from '@types'

const useAddToWishlist = (
  path: string,
  userId: string
): UseMutationResult<IWishlistBase, Error, Omit<IWishlistBase, 'id'>, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<IWishlistBase, Error, Omit<IWishlistBase, 'id'>, unknown>({
    mutationFn: (data: Omit<IWishlistBase, 'id'>): Promise<IWishlistBase> =>
      add<IWishlistBase>(path, data),
    onSuccess: (data: IWishlistBase) => {
      queryClient.setQueryData(['wishlist', userId], (oldData: IWishlistBase[]) =>
        oldData ? [...oldData, data] : oldData
      )
    },
  })
}

export default useAddToWishlist
