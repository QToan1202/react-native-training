import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { add } from '@practice-three/shared/service'
import { TWishlistBase } from '@practice-three/shared/types'

import { wishlistKeys } from '../../factories'

type TOmitProps = 'id' | 'userId'
type TMutationDFn = Partial<Omit<TWishlistBase, TOmitProps>>

const useAddToWishlist = (
  path: string,
  userId: string
): UseMutationResult<TWishlistBase, Error, TMutationDFn, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<TWishlistBase, Error, TMutationDFn, unknown>({
    mutationFn: (data: TMutationDFn): Promise<TWishlistBase> => {
      const _data = { ...data, userId }

      if (!data.productId) return add<TWishlistBase>(path, { ..._data, productId: '' })
      return add<TWishlistBase>(path, _data)
    },
    onSuccess: (data: TWishlistBase) => {
      queryClient.setQueryData(wishlistKeys.detail(userId), (oldData: TWishlistBase[]) =>
        oldData ? [...oldData, data] : oldData
      )
    },
  })
}

export default useAddToWishlist
