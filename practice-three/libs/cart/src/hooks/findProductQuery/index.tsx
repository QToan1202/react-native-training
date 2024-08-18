import { useMemo, useRef } from 'react'
import { queryOptions, useQueries, useQuery, UseQueryResult } from '@tanstack/react-query'

import { find } from '@practice-three/services'
import { TProduct, TCartItem, TCart } from '@practice-three/types'
import { useAuthStore } from '@practice-three/contexts'

import { STALE_TIMES } from '../../constants'
import getCartQuery from '../getCartQuery'

export const findProductQuery = (path: string, id: string) =>
  queryOptions<TProduct, Error, TProduct, string[]>({
    queryKey: ['product', id],
    queryFn: () => find(`${path}/${id}`),
    staleTime: STALE_TIMES.PRODUCT_INFO,
  })

export const useFindProducts = (): [boolean, TCartItem[]] => {
  const user = useAuthStore((state) => state.user)
  const isFetchingProduct = useRef<boolean>(true)
  const { data: carts, isSuccess: isGetCartsSuccess } = useQuery(
    getCartQuery('carts', user?.id || '')
  )
  const firstCartItem: TCart | undefined = useMemo(
    () => (isGetCartsSuccess ? carts.at(0) : undefined),
    [carts, isGetCartsSuccess]
  )
  const getProductsQuery = useQueries({
    queries: firstCartItem
      ? Object.keys(firstCartItem.items).map((item) => findProductQuery('/products', item))
      : [],
  })
  if (!firstCartItem || !Object.keys(firstCartItem.items).length) {
    isFetchingProduct.current = false
  }

  const data = useMemo(() => {
    if (!firstCartItem) return []

    return getProductsQuery
      .map(
        (
          { data: product, isSuccess: isGetProductSuccess }: UseQueryResult<TProduct, Error>,
          index: number
        ) => {
          const { items } = firstCartItem

          if (!isGetProductSuccess) return null

          const { id, name, price, image } = product
          const { color, quantity, size } = items[id]

          if (getProductsQuery.length - 1 === index) isFetchingProduct.current = false

          return { id, name, price, image, quantity, color, size } as TCartItem
        }
      )
      .filter((item) => item) as TCartItem[]
  }, [firstCartItem, getProductsQuery])

  return [isFetchingProduct.current, data]
}
