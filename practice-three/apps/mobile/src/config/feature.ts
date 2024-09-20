import { BottomTabParamsList, RootStackParamList } from '@practice-three/shared/types'
import {
  AUTH_FEATURE,
  ORDER_FEATURE,
  PRODUCT_FEATURE,
  PROFILE_FEATURE,
  WISHLIST_FEATURE,
} from '@practice-three/shell'

export const publicFeatureName = AUTH_FEATURE.NAME

export const publicFeatureMap = new Map<string, keyof RootStackParamList>()

publicFeatureMap.set(AUTH_FEATURE.NAME, 'AuthStack')

export const privateFeatureMap = new Map<string, keyof BottomTabParamsList>()

privateFeatureMap.set(PRODUCT_FEATURE.NAME, 'ProductTab')
privateFeatureMap.set(ORDER_FEATURE.NAME, 'CartTab')
privateFeatureMap.set(WISHLIST_FEATURE.NAME, 'WishlistTab')
privateFeatureMap.set(PROFILE_FEATURE.NAME, 'ProfileTab')
