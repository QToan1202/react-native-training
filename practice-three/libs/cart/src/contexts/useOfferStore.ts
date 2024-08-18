import { create } from 'zustand'

import { TOffer } from '@practice-three/types'

type OfferState = {
  value?: TOffer
}

type OfferAction = {
  setOffer: (value?: TOffer[]) => void
}

const initState: OfferState = {
  value: undefined,
}

export const useOfferStore = create<OfferState & OfferAction>()((set) => ({
  ...initState,
  setOffer: (value?: TOffer[]) => {
    if (!value) return

    set({ value: value[0] })
  },
}))

export default useOfferStore
