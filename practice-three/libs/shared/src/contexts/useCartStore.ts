import { create } from 'zustand'

import { TCartItem, TProduct } from '../types'

type CartState = {
  cart: TCartItem[]
}

type CartAction = {
  set: (items: Partial<TCartItem>[]) => void
  add: (product: TProduct | null) => void
  remove: (productId: TProduct['id']) => void
  clear: () => void
}

const initState: CartState = {
  cart: [],
}

export const useCartStore = create<CartState & CartAction>()((set) => ({
  ...initState,
  set: (items: Partial<TCartItem>[]) =>
    set(() => {
      const cartItems: (TCartItem | null)[] = items.map((item: Partial<TCartItem>) => {
        const { id, name, price, image, quantity } = item

        if (!id || !name || !price || !image || !quantity) return null

        return item as TCartItem
      })

      return { cart: cartItems.filter((item) => item) as TCartItem[] }
    }),
  add: (product: TProduct | null) =>
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
  remove: (productId: TProduct['id']) =>
    set((state) => ({
      cart: state.cart.filter(({ id }: TCartItem) => id !== productId),
    })),
  clear: () => set(() => ({ ...initState })),
}))

export default useCartStore
