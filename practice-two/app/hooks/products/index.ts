import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { get } from '@services'
import { IProductExpand } from '@types'

const useGetProducts = (path: string): UseQueryResult<IProductExpand[], Error> => {
  return useQuery<IProductExpand[], Error, IProductExpand[], string[]>({
    queryKey: ['products'],
    queryFn: () =>
      get(path, {
        params: {
          _expand: ['store', 'category'],
        },
      }),
  })
}

export default useGetProducts
