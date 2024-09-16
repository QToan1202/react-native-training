import { queryOptions } from '@tanstack/react-query'

import { get } from '@practice-three/shared/service'
import { TWishlistBase, TWishlistExpand } from '@practice-three/shared/types'

import { STALE_TIMES } from '../../constants'
import { wishlistKeys } from '../../factories'

type TWishlistMode<T extends boolean> = T extends true ? TWishlistExpand : TWishlistBase

const getWishlistQuery = <T extends boolean = false>(path: string, userId: string, expand?: T) => {
  const expandWishlistParams = expand ? { _expand: ['product', 'user'] } : null

  return queryOptions<
    Array<TWishlistMode<T>>,
    Error,
    Array<TWishlistMode<T>>,
    ReadonlyArray<string>
  >({
    queryKey: wishlistKeys.detail(userId, expand),
    queryFn: () => get(path, { params: { userId, ...expandWishlistParams } }),
    staleTime: STALE_TIMES.USER_WISHLIST,
  })
}

export default getWishlistQuery
