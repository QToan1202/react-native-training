import { createContext } from 'react'
import { createStore, StoreApi } from 'zustand'

import { TCartItem, TProduct } from '@practice-three/types'

export type CartState = {
  cart: TCartItem[]
}

export type CartAction = {
  set: (items: TCartItem[]) => void
  add: (product: TProduct | null) => void
  update: (productId: TProduct['id'], quantity: number) => void
  remove: (productId: TProduct['id']) => void
  clear: () => void
}

const initState: CartState = {
  cart: [],
}

const cartStore = createStore<CartState & CartAction>()((set, get) => ({
  ...initState,
  set: (items: TCartItem[]) => set(() => ({ cart: items })),
  add: (product: TProduct | null) => {
    if (!product) return set({ cart: get().cart })
    const newCart: TCartItem[] = get().cart.map((item: TCartItem) => {
      if (item.id === product.id) return { ...item, quantity: item.quantity + 1 }

      return item
    })

    set({ cart: newCart })
  },
  update: (productId: TProduct['id'], quantity: number) => {
    const newCart: TCartItem[] = get().cart.map((item: TCartItem) => {
      if (item.id === productId) {
        return { ...item, quantity }
      }

      return item
    })

    set({ cart: newCart })
  },
  remove: (productId: TProduct['id']) =>
    set((state) => ({
      cart: state.cart.filter(({ id }: TCartItem) => id !== productId),
    })),
  clear: () => set(initState),
}))

export const CartContext = createContext<StoreApi<CartState & CartAction>>(cartStore)

export default cartStore
