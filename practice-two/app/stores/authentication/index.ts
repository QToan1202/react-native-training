import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IUser } from '@types'

interface AuthState {
  isHydrated: boolean
  setIsHydrated: (isHydratedState: boolean) => void
  user: IUser | undefined
  login: (user: IUser) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isHydrated: false,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),

      user: undefined,
      login: (user: IUser) => set(() => ({ user })),
      logout: () => set(() => ({ user: undefined })),
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
