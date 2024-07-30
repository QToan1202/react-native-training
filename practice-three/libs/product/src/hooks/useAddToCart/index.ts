import {
  queryOptions,
  useMutation,
  UseMutationResult,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'

import { add, edit, get } from '@shared/services'
import { TCart, TProduct } from '@shared/types'

import { STALE_TIMES } from '../../constants'

type TMutationDFn = Pick<TProduct, 'id'>

const getCartQuery = (path: string, userId: string) =>
  queryOptions<TCart[], Error, TCart[], string[]>({
    queryKey: ['carts', userId],
    queryFn: () => get(path, { params: { userId } }),
    staleTime: STALE_TIMES.CART,
  })

const useAddToCart = (
  path: string,
  userId: string
): UseMutationResult<TCart, Error, TMutationDFn, unknown> => {
  const { data: cart } = useSuspenseQuery(getCartQuery(path, userId))
  const queryClient = useQueryClient()

  return useMutation<TCart, Error, TMutationDFn, unknown>({
    mutationFn: (data: TMutationDFn): Promise<TCart> => {
      // Create the CART for user in database
      if (!cart.length) return add<TCart>(path, { userId, items: { [data.id]: 1 } })

      const [firstCartItem] = cart
      const { items } = firstCartItem

      /**
       * CASE: User CART exist in database
       *
       * Check if current product need to add
       * is in Cart or not
       */
      const existedProduct: number | undefined = items[data.id]

      /**
       * If NOT EXIST in Cart need to push the productId,
       * add quantity assign by 1 for the new added product
       */
      if (!existedProduct)
        return edit<TCart>(path, firstCartItem.id, {
          ...firstCartItem,
          ...{ items: { ...items, [data.id]: 1 } },
        })

      /**
       * If EXIST in Cart need to increase quantity by 1,
       * so we need to map to index of `existedProduct`
       * and increase it
       */
      return edit<TCart>(path, firstCartItem.id, {
        ...firstCartItem,
        ...{ items: { ...items, ...{ [data.id]: items[data.id] + 1 } } },
      })
    },
    onSuccess: (data: TCart) => {
      // queryClient.setQueryData(['carts', userId], (oldData: TCart[]) => (oldData ? data : oldData))

      queryClient.invalidateQueries({ queryKey: ['carts', userId] })
    },
  })
}

export default useAddToCart
