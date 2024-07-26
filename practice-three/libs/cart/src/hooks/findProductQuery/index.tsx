import { useMemo, useRef } from 'react'
import { queryOptions, useQueries, UseQueryResult, useSuspenseQuery } from '@tanstack/react-query'

import { find } from '@shared/services'
import { TProduct } from '@shared/types'
import { useAuthStore } from '@shared/stores'

import { STALE_TIMES } from '../../constants'
import getCartQuery from '../getCartQuery'

export const findProductQuery = (path: string, id: string) =>
  queryOptions<TProduct, Error, TProduct, string[]>({
    queryKey: ['product', id],
    queryFn: () => find(`${path}/${id}`),
    staleTime: STALE_TIMES.PRODUCT_INFO,
  })

export type TUseFindProductsReturn = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}
export const useFindProducts = (): [boolean, Partial<TUseFindProductsReturn>[]] => {
  const user = useAuthStore((state) => state.user)
  const { data: carts } = useSuspenseQuery(getCartQuery('carts', user?.id || 'd3d1'))
  const getProductsQuery = useQueries({
    queries: carts[0].productId.map((item) => findProductQuery('/products', item)),
  })
  const isFetchingProduct = useRef<boolean>(true)

  const data: Partial<TUseFindProductsReturn>[] = useMemo(
    () =>
      getProductsQuery.map(
        (
          { data: product, isSuccess: isGetProductSuccess }: UseQueryResult<TProduct, Error>,
          index: number
        ) => {
          const [{ quantity }] = carts

          if (!isGetProductSuccess) return {}

          const { id, name, price, image } = product

          if (getProductsQuery.length - 1 === index) isFetchingProduct.current = false

          return { id, name, price, image, quantity: quantity[index] }
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getProductsQuery]
  )

  return [isFetchingProduct.current, data]
}
