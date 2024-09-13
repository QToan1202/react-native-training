import { createContext, useContext } from 'react'
import { StoreApi, useStore } from 'zustand'

export type RadioState = {
  value?: string
}

export type RadioAction = {
  onChangeValue: (value: string) => void
}

export const RadioContext = createContext<StoreApi<RadioState & RadioAction> | null>(null)
export const useRadioContext = <T>(selector: (state: RadioState & RadioAction) => T) => {
  const store = useContext(RadioContext)
  if (!store) {
    throw new Error('Missing RadioStoreProvider')
  }

  return useStore(store, selector)
}
