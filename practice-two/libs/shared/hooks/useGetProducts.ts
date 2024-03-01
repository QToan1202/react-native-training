import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { get } from '../services'
import { IProduct } from '../types'

const useGetProducts = (path: string): UseQueryResult<IProduct[], Error> => {
  return useQuery<IProduct[], Error, IProduct[], string[]>({
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
