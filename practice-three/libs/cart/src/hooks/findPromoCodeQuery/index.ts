import { queryOptions } from '@tanstack/react-query'

import { get } from '@practice-three/shared/service'
import { TOffer } from '@practice-three/shared/types'

import { STALE_TIMES } from '../../constants'

const findPromoCodeQuery = (path: string, code: string) =>
  queryOptions<TOffer[], Error, TOffer[], string[]>({
    queryKey: ['offer', code],
    queryFn: () => get(path, { params: { code } }),
    staleTime: STALE_TIMES.PROMO_CODE,
    enabled: !!code.trim().length,
  })

export default findPromoCodeQuery
