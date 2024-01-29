import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IUser } from '@types'

interface AuthState {
  isHydrated: boolean
  setIsHydrated: (isHydratedState: boolean) => void
  isAuthenticated: boolean
  user: IUser | undefined
  login: (user: IUser) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isHydrated: false,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),

      isAuthenticated: false,
      user: undefined,
      login: (user: IUser) => set(() => ({ isAuthenticated: true, user })),
      logout: () => set(() => ({ isAuthenticated: false, user: undefined })),
    }),
    {
      name: 'user.storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state: AuthState | undefined) => {
        state?.setIsHydrated(true)
      },
    }
  )
)

export default useAuthStore
