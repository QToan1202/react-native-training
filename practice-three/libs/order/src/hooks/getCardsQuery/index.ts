import { queryOptions } from '@tanstack/react-query'

import { get } from '@practice-three/shared/service'

import { TCard } from '../../types'
import { STALE_TIMES } from '../../constants'
import { cardKeys } from '../../factories'

const getCardsQuery = (path: string, userId: string) =>
  queryOptions<TCard[], Error, TCard[], ReadonlyArray<string | object>>({
    queryKey: cardKeys.list(userId),
    queryFn: () => get(path, { params: { userId } }),
    staleTime: STALE_TIMES.CARD,
  })

export default getCardsQuery
