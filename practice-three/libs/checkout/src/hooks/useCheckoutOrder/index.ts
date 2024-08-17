import { useMemo } from 'react'
import {
  useMutation,
  UseMutationResult,
  useQueries,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query'
import dayjs from 'dayjs'

import { add } from '@practice-three/services'
import { useAuthStore } from '@practice-three/contexts'
import { TCart, TProduct } from '@practice-three/types'

import { TOrder } from '../../types'
import { useCheckoutStore } from '../../contexts'
import getCartQuery from '../getCartQuery'
import findProductQuery from '../findProductQuery'
import { FEES } from '../../constants'
import useClearCartItem from '../useClearCartItem'

type TMutationDFn = null

const useCheckoutOrder = (
  path: string
): UseMutationResult<TOrder, Error, TMutationDFn, unknown> => {
  const user = useAuthStore((state) => state.user)
  const [addressId, cardId, paymentMethod, reset] = useCheckoutStore((state) => [
    state.addressId,
    state.cardId,
    state.paymentMethod,
    state.reset,
  ])
  const { data: carts, isSuccess: isGetUserCartSuccess } = useQuery(
    getCartQuery('/carts', user?.id || 'd3d1')
  )
  const firstCartItem: TCart | undefined = useMemo(
    () => (isGetUserCartSuccess ? carts.at(0) : undefined),
    [carts, isGetUserCartSuccess]
  )
  const getProductsQuery = useQueries({
    queries: firstCartItem
      ? Object.keys(firstCartItem.items).map((item) => findProductQuery('/products', item))
      : [],
  })
  const { mutate: clearCartItems } = useClearCartItem('/carts', user?.id || '')

  return useMutation<TOrder, Error, TMutationDFn, unknown>({
    mutationFn: (): Promise<TOrder> => {
      if (!user?.id) throw new Error('Missing user data to checkout order. Try to sign in again.')
      if (!addressId)
        throw new Error(
          'Missing address information. You might want to go back and select address again.'
        )
      if (!firstCartItem) throw new Error('Cannot retrieve cart items. Reload and try again later!')

      const items = firstCartItem.items as TOrder['items']
      let total = 0 + FEES.SHIP + FEES.IMPORT
      getProductsQuery.forEach(
        ({ data: product, isSuccess: isGetProductSuccess }: UseQueryResult<TProduct, Error>) => {
          if (!isGetProductSuccess) return null

          const { id, price, discountPercent } = product
          const productPriceAfterDiscount = price * (1 - discountPercent / 100)

          total += productPriceAfterDiscount * items[id].quantity
          items[id]['price'] = productPriceAfterDiscount
        }
      )
      const transformData: Omit<TOrder, 'id'> = {
        userId: user.id,
        addressId,
        date: dayjs().toISOString(),
        shippingCost: FEES.SHIP,
        tax: FEES.IMPORT,
        total,
        items,
      }

      return add<TOrder>(path, transformData)
    },
    onSuccess: () => {
      // firstCartItem will be TCart type
      // since on Mutate function process have check it exist or not
      clearCartItems(firstCartItem as TCart)
      reset()
    },
  })
}

export default useCheckoutOrder
