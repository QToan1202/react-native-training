import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IProductBase } from '@types'

interface CartState {
  isHydrated: boolean
  setIsHydrated: (isHydratedState: boolean) => void
  cart: IProductBase[]
  add: (product: IProductBase) => void
  remove: (productId: IProductBase['id']) => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      isHydrated: false,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),

      cart: [],
      add: (product: IProductBase) => set((state) => ({ cart: [...state.cart, product] })),
      remove: (productId: IProductBase['id']) =>
        set((state) => ({
          cart: state.cart.filter(({ id }: IProductBase) => id !== productId),
        })),
    }),
    {
      name: 'cart.storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state: CartState | undefined) => {
        state?.setIsHydrated(true)
      },
    }
  )
)

export default useCartStore
