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
  login: (user: IUser) => void
  logout: () => void
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
      login: (user: IUser) => set(() => ({ isAuthenticated: true, user })),
      logout: () =>
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
