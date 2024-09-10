import { create } from 'zustand'

type RadioState = {
  value?: string
}

interface RadioAction {
  onChangeValue: (value: string) => void
}

const initState: RadioState = {
  value: undefined,
}

export const useOrderStore = create<RadioState & RadioAction>()((set) => ({
  ...initState,
  onChangeValue: (value) => set({ value }),
}))

export default useOrderStore
