import { queryOptions } from '@tanstack/react-query'

import { get } from '@shared/services'

import { STALE_TIMES } from '../../constants'
import { TOrder } from '../../types'

const getOrdersQuery = (path: string, userId: string) =>
  queryOptions<TOrder[], Error, TOrder[], string[]>({
    queryKey: ['orders', userId],
    queryFn: () => get(path, { params: { userId } }),
    staleTime: STALE_TIMES.ORDER,
  })

export default getOrdersQuery
