import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { find } from '@services'
import { IProduct } from '@types'

const useFindProduct = (path: string, id: string): UseQueryResult<IProduct, Error> => {
  return useQuery<IProduct, Error, IProduct, string[]>({
    queryKey: ['products', id],
    queryFn: () =>
      find(`${path}/${id}`, {
        params: {
          _expand: ['store', 'category'],
        },
      }),
  })
}

export default useFindProduct
