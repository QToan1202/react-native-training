import { create } from 'zustand'

import { TAddress } from '../types'

type TAddressId = TAddress['id']

type AddressState = {
  id: Array<TAddressId>
  selectedId: TAddressId | null
}

type AddressActions = {
  set: (data: TAddress[]) => void
  add: (id: TAddressId) => void
  delete: (id: TAddressId) => void
  selectAddress: (id: TAddressId) => void
}

const initState: AddressState = {
  id: [],
  selectedId: null,
}

export const useAddressStore = create<AddressState & AddressActions>()((set, get) => ({
  ...initState,
  set: (data: TAddress[]) => {
    const id = data.map((value: TAddress) => value.id)

    set({ id })
  },
  add: (id: TAddressId) => {
    const addId = [...get().id, id]

    set({ id: addId })
  },
  delete: (id: TAddressId) => {
    const removeId = get().id.filter((value: string) => value !== id)

    set({ id: removeId })
  },
  selectAddress: (id: TAddressId) => {
    const isIdExist = get().id.some((value: string) => value === id)

    isIdExist && get().selectedId !== id && set({ selectedId: id })
  },
}))

export default useAddressStore
