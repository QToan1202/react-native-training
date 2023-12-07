import { UseMutationResult, UseQueryResult, useMutation, useQuery } from '@tanstack/react-query'

import { add, find, get } from '@services'
import { IOrder, IProduct } from '@types'
import { useCartStore } from '@stores'

export const useGetProducts = (path: string): UseQueryResult<IProduct[], Error> => {
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

export const useFindProduct = (path: string, id: string): UseQueryResult<IProduct, Error> => {
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

export const useOrderProduct = (
  path: string
): UseMutationResult<IOrder, Error, Omit<IOrder, 'id' | 'orderStateId'>, unknown> => {
  const clearCart = useCartStore((state) => state.clear)

  return useMutation<IOrder, Error, Omit<IOrder, 'id' | 'orderStateId'>, unknown>({
    mutationFn: (data: Omit<IOrder, 'id' | 'orderStateId'>): Promise<IOrder> =>
      add<IOrder>(path, { ...data, orderStateId: 1 }),
    onSuccess: () => clearCart(),
  })
}
