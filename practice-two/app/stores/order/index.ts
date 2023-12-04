import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IAddressBase, ICardBase } from '@types'

interface OrderState {
  isHydrated: boolean
  setIsHydrated: (isHydratedState: boolean) => void
  address: IAddressBase | null
  card: ICardBase | null
  paymentMethod: string
  setAddress: (address: IAddressBase) => void
  setCard: (card: ICardBase) => void
  setPaymentMethod: (paymentMethod: string) => void
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      isHydrated: false,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),

      address: null,
      card: null,
      paymentMethod: '',
      setAddress: (address: IAddressBase) =>
        set((state) => ({ address: { ...state.address, ...address } })),
      setCard: (card: ICardBase) => set((state) => ({ card: { ...state.card, ...card } })),
      setPaymentMethod: (paymentMethod: string) => set(() => ({ paymentMethod })),
    }),
    {
      name: 'order.storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state: OrderState | undefined) => {
        state?.setIsHydrated(true)
      },
    }
  )
)

export default useOrderStore
