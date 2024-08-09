import { queryOptions } from '@tanstack/react-query'

import { get } from '@shared/services'

import { TCard } from '../../types'
import { STALE_TIMES } from '../../constants'

const getCardsQuery = (path: string, userId: string) =>
  queryOptions<TCard[], Error, TCard[], string[]>({
    queryKey: ['cards', userId],
    queryFn: () => get(path, { params: { userId } }),
    staleTime: STALE_TIMES.CARD,
  })

export default getCardsQuery
