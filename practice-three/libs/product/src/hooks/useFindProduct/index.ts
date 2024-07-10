import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { find } from '@shared/services'
import { TProduct } from '@shared/types'

import { STALE_TIMES } from '../../constants'

const useFindProduct = (path: string, id: string): UseQueryResult<TProduct, Error> =>
  useQuery<TProduct, Error, TProduct, string[]>({
    queryKey: ['product', id],
    queryFn: () => find(`${path}/${id}`),
    staleTime: STALE_TIMES.PRODUCT_INFO,
  })

export default useFindProduct
