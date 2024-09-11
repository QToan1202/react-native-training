import {
  useMutation,
  UseMutationResult,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'

import { edit } from '@practice-three/shared/service'
import { TCart, TCartItem } from '@practice-three/shared/types'

import getCartQuery from '../getCartQuery'
import { cartKeys } from '../../factories'

type TUpdateProps = 'quantity' | 'id'
type TMutationDFn = Pick<TCartItem, TUpdateProps>

const useUpdateCartQuantity = (
  path: string,
  userId: string
): UseMutationResult<TCart, Error, TMutationDFn, unknown> => {
  const { data: cart } = useSuspenseQuery(getCartQuery(path, userId))
  const queryClient = useQueryClient()

  return useMutation<TCart, Error, TMutationDFn, unknown>({
    mutationFn: ({ id: productId, quantity }: TMutationDFn): Promise<TCart> => {
      const [firstCartItem] = cart
      const { items } = firstCartItem

      return edit<TCart>(path, firstCartItem.id, {
        ...firstCartItem,
        items: {
          ...items,
          ...{
            [productId]: { quantity, color: items[productId].color, size: items[productId].size },
          },
        },
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

export default useUpdateCartQuantity
