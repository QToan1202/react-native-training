import { useMemo, useRef } from 'react'
import { useQueries, useQuery, UseQueryResult, useSuspenseQuery } from '@tanstack/react-query'

import { TProduct } from '@shared/types'
import { useAuthStore } from '@shared/contexts'

import getOrdersQuery from '../getOrdersQuery'
import { TOrder, TOrderItem } from '../../types'
import findAddressQuery from '../findAddressQuery'
import findProductQuery from '../findProductQuery'

export const useFindProducts = (): [boolean, TOrderItem[]] => {
  const user = useAuthStore((state) => state.user)
  const isFetchingProduct = useRef<boolean>(true)
  const { data: orders } = useSuspenseQuery(getOrdersQuery('orders', user?.id || 'd3d1'))
  const firstOrderItem: TOrder | undefined = orders.at(0)
  const getProductsQuery = useQueries({
    queries: firstOrderItem
      ? Object.keys(firstOrderItem.items).map((item) => findProductQuery('/products', item))
      : [],
  })
  const { data: address, isSuccess: isGetAddressSuccess } = useQuery(
    findAddressQuery('/addresses', firstOrderItem?.addressId || '')
  )

  if (!firstOrderItem || !Object.keys(firstOrderItem.items).length) {
    isFetchingProduct.current = false
  }

  const returnData = useMemo(() => {
    if (!firstOrderItem) return []
    if (!isGetAddressSuccess) return []

    return getProductsQuery
      .map(
        (
          { data: product, isSuccess: isGetProductSuccess }: UseQueryResult<TProduct, Error>,
          index: number
        ) => {
          const { items, date } = firstOrderItem

          // Return to FALSY value to easy exclude from final arr data
          if (!isGetProductSuccess) return null

          const { id, name, image, brandName } = product

          if (getProductsQuery.length - 1 === index) isFetchingProduct.current = false

          return {
            id,
            name,
            image,
            size: items[id].size,
            quantity: items[id].quantity,
            price: items[id].price,
            date,
            address,
            brandName,
          }
        }
      )
      .filter<TOrderItem>((item) => !!item)
  }, [address, firstOrderItem, getProductsQuery, isGetAddressSuccess])

  return [isFetchingProduct.current, returnData]
}

export default useFindProducts
