import {
  queryOptions,
  useMutation,
  UseMutationResult,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'

import { add, edit, get } from '@practice-three/shared/service'
import { TCart, TCartItemProps, TProduct } from '@practice-three/shared/types'

import { STALE_TIMES } from '../../constants'

type TMutationDFn = (Pick<TProduct, 'id'> | null) & {
  size: string | null
  color: string | null
}

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
      if (!data) throw new Error('Product data need to add not ready!')

      if (!data.size) throw new Error('Please select size, before you add this product!')
      if (!data.color)
        throw new Error('Please select a color before adding the product to your cart!')

      const { id: productId, color, size } = data

      // Create the CART for user in database
      if (!cart.length)
        return add<TCart>(path, {
          userId,
          items: {
            [productId]: {
              quantity: 1,
              color,
              size,
            },
          },
        })

      const [firstCartItem] = cart
      const { items } = firstCartItem

      /**
       * CASE: User CART exist in database
       *
       * Check if current product need to add
       * is in Cart or not
       */
      const existedProduct: TCartItemProps | undefined = items[productId]

      /**
       * If NOT EXIST in Cart need to push the productId,
       * add quantity assign by 1 for the new added product
       */
      if (!existedProduct)
        return edit<TCart>(path, firstCartItem.id, {
          ...firstCartItem,
          ...{
            items: {
              ...items,
              [productId]: {
                quantity: 1,
                color,
                size,
              },
            },
          },
        })

      /**
       * If EXIST in Cart need to increase quantity by 1,
       * so we need to map to index of `existedProduct`
       * and increase it
       */
      return edit<TCart>(path, firstCartItem.id, {
        ...firstCartItem,
        ...{
          items: {
            ...items,
            ...{
              [data.id]: {
                quantity: items[data.id].quantity + 1,
                color,
                size,
              },
            },
          },
        },
      })
    },
    onSuccess: (data: TCart) => {
      // queryClient.setQueryData(['carts', userId], (oldData: TCart[]) => (oldData ? data : oldData))

      queryClient.invalidateQueries({ queryKey: ['carts', userId] })
    },
  })
}

export default useAddToCart
