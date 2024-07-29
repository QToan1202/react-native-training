import { queryOptions } from '@tanstack/react-query'

import { get } from '@shared/services'
import { TProduct } from '@shared/types'

import { STALE_TIMES } from '../../constants'

const findPromoCodeQuery = (path: string, code: string) =>
  queryOptions<TProduct[], Error, TProduct[], string[]>({
    queryKey: ['product', code],
    queryFn: () => get(path, { params: { code } }),
    staleTime: STALE_TIMES.PROMO_CODE,
    enabled: !!code.trim().length,
  })

export default findPromoCodeQuery
