import { queryOptions } from '@tanstack/react-query'

import { find } from '@practice-three/shared/service'
import { TUser } from '@practice-three/shared/types'

import { STALE_TIMES } from '../../constants'

const findProductQuery = (path: string, id: string) =>
  queryOptions<TUser, Error, TUser, string[]>({
    queryKey: ['user', id],
    queryFn: () => find(`${path}/${id}`),
    staleTime: STALE_TIMES.USER_INFO,
    enabled: !!id,
  })

export default findProductQuery
