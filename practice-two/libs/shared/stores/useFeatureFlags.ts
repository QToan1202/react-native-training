import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { FeatureConfig } from '../types'

interface FeatureState {
  isHydrated: boolean
  features: FeatureConfig[]
}

interface FeatureActions {
  setIsHydrated: (isHydratedState: boolean) => void
  isFeatureActive: (featName: string) => boolean
}

const initState: FeatureState = {
  isHydrated: false,
  features: [
    { name: 'Onboarding', active: false },
    { name: 'Login', active: false },
    { name: 'SignUp', active: false },
    { name: 'Dashboard', active: false },
    { name: 'Category', active: false },
    { name: 'Product', active: false },
    { name: 'Browse', active: false },
    { name: 'Wishlist', active: false },
    { name: 'Checkout', active: false },
    { name: 'Notification', active: false },
    { name: 'Navigation', active: false },
  ],
}

export const useFeatureFlags = create<FeatureState & FeatureActions>()(
  persist(
    (set) => ({
      ...initState,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),
      isFeatureActive: (featName: string) => {
        const item: FeatureConfig | undefined = initState.features.find(
          (feature) => feature.name === featName
        )

        if (!item) return false

        return item.active
      },
    }),
    {
      name: 'feat.storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state: (FeatureState & FeatureActions) | undefined) => {
        state?.setIsHydrated(true)
      },
    }
  )
)

export default useFeatureFlags
