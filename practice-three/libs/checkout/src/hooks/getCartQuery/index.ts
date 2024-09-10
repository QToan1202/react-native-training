import { queryOptions } from '@tanstack/react-query'

import { get } from '@practice-three/shared/service'
import { TCart } from '@practice-three/shared/types'

import { STALE_TIMES } from '../../constants'

const getCartQuery = (path: string, userId: string) =>
  queryOptions<TCart[], Error, TCart[], string[]>({
    queryKey: ['carts', userId],
    queryFn: () => get(path, { params: { userId } }),
    staleTime: STALE_TIMES.CART,
  })

export default getCartQuery
