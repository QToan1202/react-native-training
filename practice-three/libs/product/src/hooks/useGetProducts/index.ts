import { UseQueryResult, queryOptions, useQuery } from '@tanstack/react-query'

import { TProduct } from '@shared/types'
import { get } from '@shared/services'
import { parseURLSearchParams } from '@shared/utils'

import { STALE_TIMES } from '../../constants'

export const getProductsQuery = (path: string) => {
  const [, filterQuery] = path.split('?')
  const convertedFilterQuery = parseURLSearchParams(filterQuery)

  return queryOptions<TProduct[], Error, TProduct[], (string | Record<string, unknown>)[]>({
    queryKey: ['products', convertedFilterQuery],
    queryFn: () => get(path),
    staleTime: STALE_TIMES.PRODUCT_INFO,
  })
}

const useGetProducts = (path: string): UseQueryResult<TProduct[], Error> => {
  return useQuery(getProductsQuery(path))
}

export default useGetProducts
