import { queryOptions } from '@tanstack/react-query'

import { get } from '@practice-three/shared/service'

import { TAddress } from '../../types'
import { STALE_TIMES } from '../../constants'
import { addressKeys } from '../../factories'

const getAddressesQuery = (path: string, userId: string) =>
  queryOptions<TAddress[], Error, TAddress[], ReadonlyArray<string | object>>({
    queryKey: addressKeys.list(userId),
    queryFn: () => get(path, { params: { userId } }),
    staleTime: STALE_TIMES.ADDRESS,
  })

export default getAddressesQuery
