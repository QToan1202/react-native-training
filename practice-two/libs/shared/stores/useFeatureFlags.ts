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
    { name: 'Onboarding', active: process.env.ONBOARDING_FEAT_ACTIVE_STATE },
    { name: 'Login', active: process.env.LOGIN_FEAT_ACTIVE_STATE },
    { name: 'SignUp', active: process.env.SIGNUP_FEAT_ACTIVE_STATE },
    { name: 'Dashboard', active: process.env.DASHBOARD_FEAT_ACTIVE_STATE },
    { name: 'Category', active: process.env.CATEGORY_FEAT_ACTIVE_STATE },
    { name: 'Product', active: process.env.PRODUCT_FEAT_ACTIVE_STATE },
    { name: 'Browse', active: process.env.BROWSE_FEAT_ACTIVE_STATE },
    { name: 'Wishlist', active: process.env.WISHLIST_FEAT_ACTIVE_STATE },
    { name: 'Checkout', active: process.env.CHECKOUT_FEAT_ACTIVE_STATE },
    { name: 'Notification', active: process.env.NOTIFICATION_FEAT_ACTIVE_STATE },
    { name: 'Navigation', active: process.env.NAVIGATION_FEAT_ACTIVE_STATE },
  ],
}

export const useFeatureFlags = create<FeatureState & FeatureActions>()(
  persist(
    (set) => ({
      ...initState,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),
      isFeatureActive: (featName: string) => {
        const item: FeatureConfig | undefined = initState.features.find(
          (feature) => !featName.localeCompare(feature.name, 'en', { sensitivity: 'base' })
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
