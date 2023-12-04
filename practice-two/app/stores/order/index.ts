import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IAddressBase, ICardBase, IProductBase } from '@types'

interface OrderState {
  isHydrated: boolean
  setIsHydrated: (isHydratedState: boolean) => void
  products: IProductBase[]
  address: IAddressBase | null
  card: ICardBase | null
  paymentMethod: string
  addProduct: (product: IProductBase) => void
  removeProduct: (productId: IProductBase['id']) => void
  addAddress: (address: IAddressBase) => void
  addCard: (card: ICardBase) => void
  setPaymentMethod: (paymentMethod: string) => void
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      isHydrated: false,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),

      products: [],
      address: null,
      card: null,
      paymentMethod: '',
      addProduct: (product: IProductBase) =>
        set((state) => ({ products: [...state.products, product] })),
      removeProduct: (productId: IProductBase['id']) =>
        set((state) => ({
          products: state.products.filter(({ id }: IProductBase) => id !== productId),
        })),
      addAddress: (address: IAddressBase) =>
        set((state) => ({ address: { ...state.address, ...address } })),
      addCard: (card: ICardBase) => set((state) => ({ card: { ...state.card, ...card } })),
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
