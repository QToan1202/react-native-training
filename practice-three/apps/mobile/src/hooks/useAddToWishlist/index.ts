import {
  useMutation,
  UseMutationResult,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'

import { add } from '@practice-three/shared/service'
import { TWishlistBase } from '@practice-three/shared/types'
import { useAuthStore } from '@practice-three/shared/context'
import { ENDPOINTS } from '@practice-three/shared/constant'

import getWishlistQuery from '../getWishlistQuery'

type TOmitProps = 'id' | 'userId'
type TMutationDFn = Partial<Omit<TWishlistBase, TOmitProps>>

const useAddToWishlist = (
  path: string,
  userId: string
): UseMutationResult<TWishlistBase, Error, TMutationDFn, unknown> => {
  const queryClient = useQueryClient()
  const user = useAuthStore((state) => state.user)
  const { data: wishlists } = useSuspenseQuery(getWishlistQuery(ENDPOINTS.WISHLIST, user?.id || ''))

  return useMutation<TWishlistBase, Error, TMutationDFn, unknown>({
    mutationFn: (data: TMutationDFn): Promise<TWishlistBase> => {
      const _data = { ...data, userId }

      if (!_data.productId)
        throw new Error('Missing data when add product to wishlist. Try again later!')

      const isProductInWishlist: boolean = wishlists.some(
        (item: TWishlistBase) => item.productId === _data.productId
      )

      if (isProductInWishlist) throw new Error('This product you want to add have been in Wishlist')

      return add<TWishlistBase>(path, _data)
    },
    onSuccess: (data: TWishlistBase) => {
      queryClient.setQueryData(['wishlist', userId], (oldData: TWishlistBase[]) =>
        oldData
          ? [...oldData, data]
          : queryClient.invalidateQueries({ queryKey: ['wishlist', userId] })
      )
    },
  })
}

export default useAddToWishlist
