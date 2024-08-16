import { queryOptions } from '@tanstack/react-query'

import { find } from '@shared/services'
import { TProduct } from '@shared/types'

import { STALE_TIMES } from '../../constants'

const findProductQuery = (path: string, id: string) =>
  queryOptions<TProduct, Error, TProduct, string[]>({
    queryKey: ['product', id],
    queryFn: () => find(`${path}/${id}`),
    staleTime: STALE_TIMES.PRODUCT_INFO,
  })

export default findProductQuery
