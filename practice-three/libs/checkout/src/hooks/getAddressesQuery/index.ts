import { queryOptions } from '@tanstack/react-query'

import { get } from '@shared/services'

import { TAddress } from '../../types'
import { STALE_TIMES } from '../../constant'

const getAddressesQuery = (path: string, userId: string) =>
  queryOptions<TAddress[], Error, TAddress[], string[]>({
    queryKey: ['addresses', userId],
    queryFn: () => get(path, { params: { userId } }),
    staleTime: STALE_TIMES.ADDRESS,
  })

export default getAddressesQuery
