import { createStore, StoreApi } from 'zustand'

import { TCartItem, TProduct } from '@shared/types'
import { createContext } from 'react'

export type CartState = {
  cart: TCartItem[]
}

export type CartAction = {
  set: (items: TCartItem[]) => void
  add: (product: TProduct | TCartItem | null) => void
  update: (productId: TProduct['id'], quantity: number) => void
  remove: (productId: TProduct['id']) => void
  clear: () => void
}

const initState: CartState = {
  cart: [],
}

const cartStore = createStore<CartState & CartAction>()((set) => ({
  ...initState,
  set: (items: TCartItem[]) => set(() => ({ cart: items })),
  add: (product: TProduct | TCartItem | null) =>
    set((state) => {
      if (!product) return { cart: state.cart }

      const { id, name, price, image } = product

      // Check the upcoming product is existed in cart or not
      const existedProduct: TCartItem | undefined = state.cart.find(
        (item: TCartItem) => item.id === product.id
      )

      // If NOT add to cart, and assign quantity = 1
      if (!existedProduct)
        return { cart: [...state.cart, { ...{ id, name, price, image }, quantity: 1 }] }

      // If YES increase quantity by 1
      const newCart: TCartItem[] = state.cart.map((item: TCartItem) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }

        return item
      })

      return { cart: newCart }
    }),
  update: (productId: TProduct['id'], quantity: number) =>
    set((state) => {
      const newCart: TCartItem[] = state.cart.map((item: TCartItem) => {
        if (item.id === productId) {
          return { ...item, quantity }
        }

        return item
      })

      return { cart: newCart }
    }),
  remove: (productId: TProduct['id']) =>
    set((state) => {
      console.log('this', state.cart)
      return {
        cart: state.cart.filter(({ id }: TCartItem) => id !== productId),
      }
    }),
  clear: () => set(() => ({ ...initState })),
}))

export const CartContext = createContext<StoreApi<CartState & CartAction>>(cartStore)

export default cartStore
