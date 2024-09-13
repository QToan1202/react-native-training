import { queryOptions } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import { TProduct } from '@practice-three/shared/types'
import { get } from '@practice-three/shared/service'

import { STALE_TIMES } from '../../constants'

const getProductsQuery = (path: string, options?: AxiosRequestConfig) => {
  return queryOptions<TProduct[], Error, TProduct[], string[]>({
    queryKey: ['products'],
    queryFn: () => get(path, options),
    staleTime: STALE_TIMES.PRODUCT_INFO,
  })
}

export default getProductsQuery
