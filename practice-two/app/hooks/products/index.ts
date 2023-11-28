import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { find, get } from '@services'
import { IProductExpand } from '@types'

export const useGetProducts = (path: string): UseQueryResult<IProductExpand[], Error> => {
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

export const useFindProduct = (path: string, id: string): UseQueryResult<IProductExpand, Error> => {
  return useQuery<IProductExpand, Error, IProductExpand, string[]>({
    queryKey: ['products', id],
    queryFn: () =>
      find(`${path}/${id}`, {
        params: {
          _expand: ['store', 'category'],
        },
      }),
  })
}
