import {
  useMutation,
  UseMutationResult,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'

import { edit } from '@practice-three/shared/service'
import { TCart, TProduct } from '@practice-three/shared/types'

import getCartQuery from '../getCartQuery'
import { cartKeys } from '../../factories'

type TMutationDFn = TProduct['id']

/**
 * Only delete the ITEM not the actual cart
 * so it more like an update API
 */
const useDeleteCartItem = (
  path: string,
  userId: string
): UseMutationResult<TCart, Error, TMutationDFn, unknown> => {
  const { data: cart } = useSuspenseQuery(getCartQuery(path, userId))
  const queryClient = useQueryClient()

  return useMutation<TCart, Error, TMutationDFn, unknown>({
    mutationFn: (productId: TMutationDFn): Promise<TCart> => {
      const [firstCartItem] = cart
      const { items } = firstCartItem
      const { [productId]: _, ...removeData } = items

      return edit<TCart>(path, firstCartItem.id, {
        ...firstCartItem,
        ...{ items: removeData },
      })
    },
    onSuccess: (data: TCart) => {
      /**
       * Set the new cache data MUST BE in array
       * since the [query key] ['carts', userId] control carts data return ARRAY of carts
       */
      queryClient.setQueryData(cartKeys.detail(userId), (oldData: TCart[]) =>
        data ? [data] : oldData
      )
    },
  })
}

export default useDeleteCartItem
