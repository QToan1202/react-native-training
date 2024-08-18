import { create } from 'zustand'

type CheckoutState = {
  isCartReady: boolean
  isSetAddress: boolean
  isSelectedPaymentMethod: boolean
  addressId: string | null
  cardId: string | null
  paymentMethod: string
}

type CheckoutActions = {
  setCartStatus: () => void
  setAddress: (id: string) => void
  setPaymentMethod: (method: string, id?: string) => void
  reset: () => void
}

const initState: CheckoutState = {
  isCartReady: false,
  isSetAddress: false,
  addressId: null,
  isSelectedPaymentMethod: false,
  cardId: null,
  paymentMethod: '',
}

export const useCheckoutStore = create<CheckoutState & CheckoutActions>()((set) => ({
  ...initState,
  setCartStatus: () => {
    set({ isCartReady: true })
  },

  setAddress: (addressId: string) => {
    set({ addressId, isSetAddress: true })
  },

  setPaymentMethod: (method: string, cardId = '') => {
    if (!cardId) return set({ isSelectedPaymentMethod: true, cardId: null, paymentMethod: method })

    set({ isSelectedPaymentMethod: true, cardId, paymentMethod: method })
  },

  reset: () => {
    set(initState)
  },
}))

export default useCheckoutStore
