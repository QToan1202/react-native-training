import { queryOptions } from '@tanstack/react-query'

import { get } from '@shared/services'
import { TWishlistBase, TWishlistExpand } from '@shared/types'

import { STALE_TIMES } from '../../constants'

type TWishlistMode<T extends boolean> = T extends true ? TWishlistExpand : TWishlistBase

const getWishlistQuery = <T extends boolean = false>(path: string, userId: string, expand?: T) => {
  const expandWishlistParams = expand ? { _expand: ['product', 'user'] } : null

  return queryOptions<Array<TWishlistMode<T>>, Error, Array<TWishlistMode<T>>, string[]>({
    queryKey: ['wishlist', userId],
    queryFn: () => get(path, { params: { userId, ...expandWishlistParams } }),
    staleTime: STALE_TIMES.USER_WISHLIST,
  })
}

export default getWishlistQuery
