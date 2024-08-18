import { create } from 'zustand'

type TabsState = {
  value: string
}

type TabsAction = {
  setValue: (value: string) => void
}

const initState: TabsState = {
  value: '',
}

export const useTabs = create<TabsState & TabsAction>()((set) => ({
  ...initState,
  setValue: (value) => set({ value }),
}))

export default useTabs
