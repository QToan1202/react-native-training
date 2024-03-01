import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { get, ICard } from '@practice-two/shared'

const useGetCard = (path: string, userId: string): UseQueryResult<ICard[], Error> => {
  return useQuery<ICard[], Error, ICard[], string[]>({
    queryKey: ['cards', userId],
    queryFn: () => get(path),
  })
}

export default useGetCard
