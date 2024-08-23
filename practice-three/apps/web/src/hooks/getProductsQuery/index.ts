import { queryOptions } from '@tanstack/react-query'

import { TProduct } from '@practice-three/types'
import { get } from '@practice-three/services'

import { STALE_TIMES } from '../../constants'

export const getProductsQuery = (path: string) => {
  return queryOptions<TProduct[], Error, TProduct[], string[]>({
    queryKey: ['products'],
    queryFn: () => get(path),
    staleTime: STALE_TIMES.PRODUCT_INFO,
  })
}

export default getProductsQuery
