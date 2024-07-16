import { queryOptions } from '@tanstack/react-query'

import { get } from '@shared/services'
import { TWishlistBase } from '@shared/types'

import { STALE_TIMES } from '../../constants'

const getWishlistQuery = (path: string, userId: string) =>
  queryOptions<TWishlistBase[], Error, TWishlistBase[], string[]>({
    queryKey: ['wishlist', userId],
    queryFn: () => get(path, { params: { userId } }),
    staleTime: STALE_TIMES.USER_WISHLIST,
  })

export default getWishlistQuery
