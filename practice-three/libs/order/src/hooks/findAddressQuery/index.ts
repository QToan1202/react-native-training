import { queryOptions } from '@tanstack/react-query'

import { find } from '@practice-three/shared/service'

import { TAddress } from '../../types'
import { STALE_TIMES } from '../../constants'
import { addressKeys } from '../../factories'

const findAddressQuery = (path: string, id: string) =>
  queryOptions<TAddress, Error, TAddress, ReadonlyArray<string>>({
    queryKey: addressKeys.detail(id),
    queryFn: () => find(`${path}/${id}`),
    staleTime: STALE_TIMES.ADDRESS,
    enabled: !!id,
  })

export default findAddressQuery
