import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IAddressBase, ICardBase } from '@types'

interface OrderState {
  isHydrated: boolean
  address: IAddressBase | null
  card: ICardBase | null
  paymentMethod: string
}

interface OrderActions {
  setIsHydrated: (isHydratedState: boolean) => void
  setAddress: (address: IAddressBase) => void
  setCard: (card: ICardBase) => void
  setPaymentMethod: (paymentMethod: string) => void
}

const initState: OrderState = {
  isHydrated: false,
  address: null,
  card: null,
  paymentMethod: '',
}

export const useOrderStore = create<OrderState & OrderActions>()(
  persist(
    (set) => ({
      ...initState,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),
      setAddress: (address: IAddressBase) =>
        set((state) => ({ address: { ...state.address, ...address } })),
      setCard: (card: ICardBase) => set((state) => ({ card: { ...state.card, ...card } })),
      setPaymentMethod: (paymentMethod: string) => set(() => ({ paymentMethod })),
    }),
    {
      name: 'order.storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state: (OrderState & OrderActions) | undefined) => {
        state?.setIsHydrated(true)
      },
    }
  )
)

export default useOrderStore
