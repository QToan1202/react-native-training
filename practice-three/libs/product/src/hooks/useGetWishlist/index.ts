import { queryOptions, useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { add, get, remove } from '@shared/services'
import { TWishlistBase } from '@shared/types'

import { STALE_TIMES } from '../../constants'
import { AxiosResponse } from 'axios'

export const getWishlistQuery = (path: string, userId: string) =>
  queryOptions<TWishlistBase[], Error, TWishlistBase[], string[]>({
    queryKey: ['wishlist', userId],
    queryFn: () => get(path, { params: { userId } }),
    staleTime: STALE_TIMES.USER_WISHLIST,
  })

export const useAddToWishlist = (
  path: string,
  userId: string
): UseMutationResult<TWishlistBase, Error, Omit<TWishlistBase, 'id'>, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<TWishlistBase, Error, Omit<TWishlistBase, 'id'>, unknown>({
    mutationFn: (data: Omit<TWishlistBase, 'id'>): Promise<TWishlistBase> =>
      add<TWishlistBase>(path, data),
    onSuccess: (data: TWishlistBase) => {
      queryClient.setQueryData(['wishlist', userId], (oldData: TWishlistBase[]) =>
        oldData ? [...oldData, data] : oldData
      )
    },
  })
}

export const useDeleteFromWishlist = (
  path: string,
  userId: string
): UseMutationResult<AxiosResponse['status'], Error, Pick<TWishlistBase, 'id'>, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse['status'], Error, Pick<TWishlistBase, 'id'>, unknown>({
    mutationFn: ({ id }: Pick<TWishlistBase, 'id'>): Promise<AxiosResponse['status']> =>
      remove(path, id),
    onSuccess: (deleteStatus: number, { id }: Pick<TWishlistBase, 'id'>) => {
      queryClient.setQueryData(['wishlist', userId], (oldData: TWishlistBase[]) =>
        deleteStatus === 200 ? oldData.filter((value: TWishlistBase) => value.id !== id) : oldData
      )
    },
  })
}
