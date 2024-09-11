import { queryOptions } from '@tanstack/react-query'

import { get } from '@practice-three/shared/service'

import { STALE_TIMES } from '../../constants'
import { TOrder } from '../../types'
import { orderKeys } from '../../factories'

const getOrdersQuery = (path: string, userId: string) =>
  queryOptions<TOrder[], Error, TOrder[], ReadonlyArray<string | object>>({
    queryKey: orderKeys.list(userId),
    queryFn: () => get(path, { params: { userId } }),
    staleTime: STALE_TIMES.ORDER,
  })

export default getOrdersQuery
