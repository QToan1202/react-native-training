import { useMemo, useRef } from 'react'
import { queryOptions, useQueries, UseQueryResult, useSuspenseQuery } from '@tanstack/react-query'

import { find } from '@shared/services'
import { TProduct, TCartItem } from '@shared/types'
import { useAuthStore } from '@shared/contexts'

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
  const getProductsQuery = useQueries({
    queries: Object.keys(carts[0].items).map((item) => findProductQuery('/products', item)),
  })
  const data = useMemo(
    () =>
      getProductsQuery
        .map(
        (
          { data: product, isSuccess: isGetProductSuccess }: UseQueryResult<TProduct, Error>,
          index: number
        ) => {
          const { items } = carts[0]

            if (!isGetProductSuccess) return null

          const { id, name, price, image } = product

          if (getProductsQuery.length - 1 === index) isFetchingProduct.current = false

            return { id, name, price, image, quantity: items[id] } as TCartItem
        }
        )
        .filter((item) => item) as TCartItem[],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getProductsQuery]
  )

  return [isFetchingProduct.current, data]
}
