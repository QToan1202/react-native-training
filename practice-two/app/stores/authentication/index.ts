import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IUser } from '@types'

interface AuthState {
  user: IUser | undefined
  login: (user: IUser) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: undefined,

      login: (user: IUser) => set(() => ({ user })),

      logout: () => set(() => ({ user: undefined })),
    }),
    {
      name: 'user.storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export default useAuthStore
