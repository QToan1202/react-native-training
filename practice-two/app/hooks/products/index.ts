import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQueries,
  useQuery,
} from '@tanstack/react-query'
import * as Notifications from 'expo-notifications'

import { add, find, get } from '@services'
import { ICart, IOrder, IProduct } from '@types'
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

export const useFindMultiProduct = (
  path: string,
  productId: number[],
  quantity: number[]
): Partial<ICart>[] => {
  const queryFindFn = (id: string) =>
    find<IProduct>(`${path}/${id}`, {
      params: {
        _expand: ['store', 'category'],
      },
    })

  const productQueries = useQueries<IProduct[], Array<UseQueryResult<IProduct, Error>>>({
    queries: productId.map((id) => ({
      queryKey: ['orders', id],
      queryFn: () => queryFindFn(String(id)),
    })),
  })

  const cartItems: Partial<ICart>[] = productQueries.map(
    ({ data, isSuccess }: UseQueryResult<IProduct, Error>, index: number) => {
      if (!isSuccess) return {}
      const { id, img, name, price, discountPrice }: IProduct = data

      return { id, img, name, price, discountPrice, quantity: quantity[index] }
    }
  )

  return cartItems
}

export const useOrderProduct = (
  path: string
): UseMutationResult<IOrder, Error, Omit<IOrder, 'id' | 'orderStateId'>, unknown> => {
  const clearCart = useCartStore((state) => state.clear)

  return useMutation<IOrder, Error, Omit<IOrder, 'id' | 'orderStateId'>, unknown>({
    mutationFn: (data: Omit<IOrder, 'id' | 'orderStateId'>): Promise<IOrder> =>
      add<IOrder>(path, { ...data, orderStateId: 1 }),
    onSuccess: (data: IOrder) => {
      clearCart()
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Order successfully',
          body: `Order #${data.id} is being processed by store`,
          data: {
            redirect: `tradly://orders/${data.id}`,
          },
        },
        trigger: null,
      })
    },
  })
}

export const useGetOderDetail = (path: string, id: string): UseQueryResult<IOrder, Error> => {
  return useQuery<IOrder, Error>({
    queryKey: ['orders', id],
    queryFn: () => find<IOrder>(`${path}/${id}`),
  })
}
