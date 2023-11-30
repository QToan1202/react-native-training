import { AxiosResponse } from 'axios'
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import { add, get, remove } from '@services'
import { IWishlistBase } from '@types'

export const useGetWishlist = (
  path: string,
  userId: string
): UseQueryResult<IWishlistBase[], Error> => {
  return useQuery<IWishlistBase[], Error, IWishlistBase[], string[]>({
    queryKey: ['wishlist', userId],
    queryFn: () => get(path, { params: { userId } }),
  })
}

export const useAddToWishlist = (
  path: string,
  userId: string
): UseMutationResult<IWishlistBase, Error, Omit<IWishlistBase, 'id'>, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<IWishlistBase, Error, Omit<IWishlistBase, 'id'>, unknown>({
    mutationFn: (data: Omit<IWishlistBase, 'id'>): Promise<IWishlistBase> =>
      add<IWishlistBase>(path, data),
    onSuccess: (data: IWishlistBase) => {
      queryClient.setQueryData(['wishlist', userId], (oldData: IWishlistBase[]) =>
        oldData ? [...oldData, data] : oldData
      )
    },
  })
}

export const useDeleteFromWishlist = (
  path: string,
  userId: string
): UseMutationResult<AxiosResponse['status'], Error, Pick<IWishlistBase, 'id'>, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse['status'], Error, Pick<IWishlistBase, 'id'>, unknown>({
    mutationFn: ({ id }: Pick<IWishlistBase, 'id'>): Promise<AxiosResponse['status']> =>
      remove(path, id),
    onSuccess: (deleteStatus: number, { id }: Pick<IWishlistBase, 'id'>) => {
      queryClient.setQueryData(['wishlist', userId], (oldData: IWishlistBase[]) =>
        deleteStatus === 200 ? oldData.filter((value: IWishlistBase) => value.id !== id) : oldData
      )
    },
  })
}
