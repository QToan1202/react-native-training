import { UseMutationResult, useMutation } from '@tanstack/react-query'
import * as Notifications from 'expo-notifications'
import * as ExpoLinking from 'expo-linking'

import { add } from '@services'
import { IOrder } from '@types'
import { useCartStore } from '@stores'

const useOrderProduct = (
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
            redirect: `${ExpoLinking.createURL('/')}home/orders/${data.id}`,
          },
        },
        trigger: null,
      })
    },
  })
}

export default useOrderProduct