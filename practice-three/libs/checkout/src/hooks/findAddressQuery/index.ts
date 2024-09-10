import { queryOptions } from '@tanstack/react-query'

import { find } from '@practice-three/shared/service'

import { TAddress } from '../../types'
import { STALE_TIMES } from '../../constants'

const findAddressQuery = (path: string, id: string) =>
  queryOptions<TAddress, Error, TAddress, string[]>({
    queryKey: ['address', id],
    queryFn: () => find(`${path}/${id}`),
    staleTime: STALE_TIMES.ADDRESS,
    enabled: !!id,
  })

export default findAddressQuery
