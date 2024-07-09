import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { TProduct } from '@shared/types'
import { get } from '@shared/services'

import { STALE_TIMES } from '../../constants'

const useGetProducts = (path: string): UseQueryResult<TProduct[], Error> => {
  const [, filterQuery] = path.split('?')

  return useQuery<TProduct[], Error, TProduct[], string[]>({
    queryKey: ['products', filterQuery],
    queryFn: () => get(path),
    staleTime: STALE_TIMES.PRODUCT_INFO,
  })
}

export default useGetProducts
