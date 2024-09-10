import { queryOptions } from '@tanstack/react-query'

import { find } from '@practice-three/shared/service'
import { TProduct } from '@practice-three/shared/types'

import { STALE_TIMES } from '../../constants'

const findProductQuery = (path: string, id: string) =>
  queryOptions<TProduct, Error, TProduct, string[]>({
    queryKey: ['product', id],
    queryFn: () => find(`${path}/${id}`),
    staleTime: STALE_TIMES.PRODUCT_INFO,
  })

export default findProductQuery
