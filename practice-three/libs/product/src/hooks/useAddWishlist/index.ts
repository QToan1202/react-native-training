import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { add } from '@shared/services'
import { TWishlistBase } from '@shared/types'

const useAddToWishlist = (
  path: string,
  userId: string
): UseMutationResult<TWishlistBase, Error, Omit<TWishlistBase, 'id'>, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<TWishlistBase, Error, Omit<TWishlistBase, 'id'>, unknown>({
    mutationFn: (data: Omit<TWishlistBase, 'id'>): Promise<TWishlistBase> =>
      add<TWishlistBase>(path, data),
    onSuccess: (data: TWishlistBase) => {
      queryClient.setQueryData(['wishlist', userId], (oldData: TWishlistBase[]) =>
        oldData ? [...oldData, data] : oldData
      )
    },
  })
}

export default useAddToWishlist
