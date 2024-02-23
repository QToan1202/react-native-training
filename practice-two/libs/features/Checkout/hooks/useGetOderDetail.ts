import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { find } from '@services'
import { IOrder } from '@types'

const useGetOderDetail = (path: string, id: string): UseQueryResult<IOrder, Error> => {
  return useQuery<IOrder, Error>({
    queryKey: ['orders', id],
    queryFn: () => find<IOrder>(`${path}/${id}`),
  })
}

export default useGetOderDetail
