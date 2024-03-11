import { create } from 'zustand'

import { FeatureConfig } from '../types'

interface FeatureState {
  features: FeatureConfig[]
}

interface FeatureActions {
  isFeatureActive: (featName: string) => boolean
}

const initState: FeatureState = {
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

export const useFeatureFlags = create<FeatureState & FeatureActions>()(() => ({
  ...initState,
  isFeatureActive: (featName: string) => {
    const item: FeatureConfig | undefined = initState.features.find(
      (feature) => !featName.localeCompare(feature.name, 'en', { sensitivity: 'base' })
    )

    if (!item) return false

    return item.active
  },
}))

export default useFeatureFlags
