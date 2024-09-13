import { queryOptions } from '@tanstack/react-query'

import { get } from '@practice-three/shared/service'
import { TOffer } from '@practice-three/shared/types'

import { STALE_TIMES } from '../../constants'
import { offerKeys } from '../../factories'

const findPromoCodeQuery = (path: string, code: string) =>
  queryOptions<TOffer[], Error, TOffer[], ReadonlyArray<string | object>>({
    queryKey: offerKeys.list(code),
    queryFn: () => get(path, { params: { code } }),
    staleTime: STALE_TIMES.PROMO_CODE,
    enabled: !!code.trim().length,
  })

export default findPromoCodeQuery
