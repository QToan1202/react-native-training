import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IUser } from '@types'

interface AuthState {
  isHydrated: boolean
  isAuthenticated: boolean
  user: IUser | undefined
}

interface AuthActions {
  setIsHydrated: (isHydratedState: boolean) => void
  setUser: (user: IUser) => void
  clearAuth: () => void
}

const initState: AuthState = {
  isHydrated: false,
  isAuthenticated: false,
  user: undefined,
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      ...initState,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),
      setUser: (user: IUser) => set(() => ({ isAuthenticated: true, user })),
      clearAuth: () =>
        set(() => ({ isAuthenticated: initState.isAuthenticated, user: initState.user })),
    }),
    {
      name: 'user.storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state: (AuthState & AuthActions) | undefined) => {
        state?.setIsHydrated(true)
      },
    }
  )
)

export default useAuthStore
