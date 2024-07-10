import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { TProduct } from '@shared/types'
import { get } from '@shared/services'
import { parseURLSearchParams } from '@shared/utils'

import { STALE_TIMES } from '../../constants'

const useGetProducts = (path: string): UseQueryResult<TProduct[], Error> => {
  const [, filterQuery] = path.split('?')
  const convertedFilterQuery = parseURLSearchParams(filterQuery)

  return useQuery<TProduct[], Error, TProduct[], (string | Record<string, unknown>)[]>({
    queryKey: ['products', convertedFilterQuery],
    queryFn: () => get(path),
    staleTime: STALE_TIMES.PRODUCT_INFO,
  })
}

export default useGetProducts
