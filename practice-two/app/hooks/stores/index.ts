import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { get } from '@services'
import { IStore } from '@types'

const useGetStores = (path: string): UseQueryResult<IStore[], Error> => {
  return useQuery<IStore[], Error, IStore[], string[]>({
    queryKey: ['stores'],
    queryFn: () => get(path),
  })
}

export default useGetStores
