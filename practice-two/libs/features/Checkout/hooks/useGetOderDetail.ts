import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { find, IOrder } from '@practice-two/shared'

const useGetOderDetail = (path: string, id: string): UseQueryResult<IOrder, Error> => {
  return useQuery<IOrder, Error>({
    queryKey: ['orders', id],
    queryFn: () => find<IOrder>(`${path}/${id}`),
  })
}

export default useGetOderDetail
