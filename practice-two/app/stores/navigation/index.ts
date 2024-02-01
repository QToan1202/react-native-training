import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface NavState {
  isHydrated: boolean
  isReady: boolean
  navigationState: string
}

interface NavActions {
  setIsHydrated: (isHydratedState: boolean) => void
  setIsReady: (isReady: boolean) => void
  setNavigationState: (state: object | undefined) => void
  clearState: () => void
}

const initState: NavState = {
  isHydrated: false,
  isReady: false,
  navigationState: '',
}

export const useNavigationStore = create<NavState & NavActions>()(
  persist(
    (set) => ({
      ...initState,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),
      setIsReady: (isReady: boolean) => set({ isReady }),
      setNavigationState: (navigationState: object | undefined) =>
        set(() => {
          if (!navigationState) return {}

          return { navigationState: JSON.stringify(navigationState) }
        }),
      clearState: () => set(initState),
    }),
    {
      name: 'navigation.storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state: (NavState & NavActions) | undefined) => {
        state?.setIsHydrated(true)
      },
    }
  )
)

export default useNavigationStore
