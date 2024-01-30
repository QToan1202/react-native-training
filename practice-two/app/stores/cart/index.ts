import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { ICart, IProductBase } from '@types'

interface CartState {
  isHydrated: boolean
  cart: ICart[]
}

interface CartActions {
  setIsHydrated: (isHydratedState: boolean) => void
  add: (product: IProductBase) => void
  remove: (productId: IProductBase['id']) => void
  clear: () => void
}

const initState: CartState = {
  isHydrated: false,
  cart: [],
}

export const useCartStore = create<CartState & CartActions>()(
  persist(
    (set) => ({
      ...initState,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),
      add: (product: IProductBase) =>
        set((state) => {
          // Check the upcoming product is existed in cart or not
          const existedProduct: ICart | undefined = state.cart.find(
            (item: ICart) => item.id === product.id
          )

          // If NOT add to cart, and assign quantity = 1
          if (!existedProduct) return { cart: [...state.cart, { ...product, quantity: 1 }] }

          // If YES increase quantity by 1
          const newCart: ICart[] = state.cart.map((item: ICart) => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity + 1 }
            }

            return item
          })

          return { cart: newCart }
        }),
      remove: (productId: IProductBase['id']) =>
        set((state) => ({
          cart: state.cart.filter(({ id }: IProductBase) => id !== productId),
        })),
      clear: () => set(initState),
    }),
    {
      name: 'cart.storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state: (CartState & CartActions) | undefined) => {
        state?.setIsHydrated(true)
      },
    }
  )
)

export default useCartStore
