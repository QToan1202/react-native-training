import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { get } from '@services'
import { IWishlistBase } from '@types'

const useGetWishlist = (path: string, userId: string): UseQueryResult<IWishlistBase[], Error> => {
  return useQuery<IWishlistBase[], Error, IWishlistBase[], string[]>({
    queryKey: ['wishlist', userId],
    queryFn: () => get(path, { params: { userId } }),
  })
}

export default useGetWishlist
