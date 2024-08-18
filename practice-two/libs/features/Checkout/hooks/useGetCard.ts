import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { get } from '@practice-two/shared/services'
import { ICard } from '@practice-two/shared/types'

const useGetCard = (path: string, userId: string): UseQueryResult<ICard[], Error> => {
  return useQuery<ICard[], Error, ICard[], string[]>({
    queryKey: ['cards', userId],
    queryFn: () => get(path),
  })
}

export default useGetCard
