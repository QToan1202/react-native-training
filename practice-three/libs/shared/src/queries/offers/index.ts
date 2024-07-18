import { queryOptions } from '@tanstack/react-query'

import { TOffer } from '../../types'
import { get } from '../../services'

const STALE_TIMES = 30 * 60 * 1000

const getOffersQuery = (path: string) => {
  return queryOptions<TOffer[], Error, TOffer[], (string | Record<string, unknown>)[]>({
    queryKey: ['offers'],
    queryFn: () => get(path),
    staleTime: STALE_TIMES,
  })
}

export default getOffersQuery
