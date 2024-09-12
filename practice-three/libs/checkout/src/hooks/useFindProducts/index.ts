import { useCallback, useMemo, useRef } from 'react'
import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query'
import { isWeb } from 'tamagui'
import dayjs from 'dayjs'

import { TCart, TProduct } from '@practice-three/shared/types'
import { useAuthStore } from '@practice-three/shared/context'
import { ENDPOINTS } from '@practice-three/shared/constant'

import getOrdersQuery from '../getOrdersQuery'
import { TOrder, TOrderItem } from '../../types'
import findAddressQuery from '../findAddressQuery'
import findProductQuery from '../findProductQuery'
import getCartQuery from '../getCartQuery'

/**
 * Fetches product details based on the platform context.
 *
 * Order in WEB: Is ORDER DETAIL
 *
 * Order in NATIVE: Is PRE-ORDER DETAIL that mean
 * it only summary order before the final checkout process
 *
 * @param {boolean} isPreOrder Determines whether the data fetched is for pre-order or final order details.
 * @returns {[boolean, TOrderItem[]]} - An array where `isLoading` is a boolean indicating the loading state,
 *          and `data` is an array of `TOrderItem[]` representing the order items.
 */
export const useFindProducts = (isPreOrder = !isWeb): [boolean, TOrderItem[]] => {
  const user = useAuthStore((state) => state.user)
  const isFetchingProduct = useRef<boolean>(true)
  // TODO: Might optimize Json-server to prevent request waterfall
  const { data: orders, isSuccess: isGetOrdersSuccess } = useQuery({
    ...getOrdersQuery(ENDPOINTS.ORDER, user?.id || ''),
    enabled: !isPreOrder,
  })
  const { data: carts, isSuccess: isGetCartsSuccess } = useQuery({
    ...getCartQuery(ENDPOINTS.CART, user?.id || ''),
    enabled: isPreOrder,
  })
  const isOrder = useCallback(
    (item: TOrder | TCart | undefined): item is TOrder => {
      if (!item) return false

      return !isPreOrder && (item as TOrder).addressId !== undefined
    },
    [isPreOrder]
  )
  const firstItem: TOrder | TCart | undefined = useMemo(
    () => (isGetOrdersSuccess ? orders.at(0) : isGetCartsSuccess ? carts.at(0) : undefined),
    [carts, isGetCartsSuccess, isGetOrdersSuccess, orders]
  )
  const getProductsQuery = useQueries({
    queries: firstItem
      ? Object.keys(firstItem.items).map((item) => findProductQuery(ENDPOINTS.PRODUCT, item))
      : [],
  })

  const { data: address, isSuccess: isGetAddressSuccess } = useQuery(
    findAddressQuery(ENDPOINTS.ADDRESS, isOrder(firstItem) ? firstItem?.addressId : '')
  )
  if (!firstItem || !Object.keys(firstItem.items).length) {
    isFetchingProduct.current = false
  }

  const returnData = useMemo(() => {
    if (!firstItem) return []
    if (!isGetAddressSuccess) return []

    return getProductsQuery
      .map(
        (
          { data: product, isSuccess: isGetProductSuccess }: UseQueryResult<TProduct, Error>,
          index: number
        ) => {
          // Return to FALSY value to easy exclude from final arr data
          if (!isGetProductSuccess) return null

          const { items }: TCart | TOrder = firstItem

          const { id, name, images, brandName, price: productPrice, discountPercent } = product

          if (getProductsQuery.length - 1 === index) isFetchingProduct.current = false

          return {
            id,
            name,
            image: images[0],
            size: items[id].size,
            quantity: items[id].quantity,
            price: isOrder(firstItem)
              ? firstItem.items[id].price
              : productPrice * (1 - discountPercent / 100),
            date: isOrder(firstItem) ? firstItem.date : dayjs().toISOString(),
            address,
            brandName,
          }
        }
      )
      .filter<TOrderItem>((item) => !!item)
  }, [address, firstItem, getProductsQuery, isGetAddressSuccess, isOrder])

  return [isFetchingProduct.current, returnData]
}

export default useFindProducts
