import { TFeatureConfig } from '@practice-three/shared/types'

import {
  AUTH_FEATURE,
  CART_FEATURE,
  CHECKOUT_FEATURE,
  PRODUCT_FEATURE,
  PROFILE_FEATURE,
} from './features'

const PRE_DEFINED_FEATURES: Array<TFeatureConfig> = [
  {
    name: AUTH_FEATURE.NAME,
    description: AUTH_FEATURE.DESC,
  },
  {
    name: PRODUCT_FEATURE.NAME,
    description: PRODUCT_FEATURE.DESC,
  },
  {
    name: CART_FEATURE.NAME,
    description: CART_FEATURE.DESC,
  },
  {
    name: CHECKOUT_FEATURE.NAME,
    description: CHECKOUT_FEATURE.DESC,
  },
  {
    name: PROFILE_FEATURE.NAME,
    description: PRODUCT_FEATURE.DESC,
  },
]

const features = (featureList: string | ReadonlyArray<string>): Array<string> => {
  const convertFeatureList =
    typeof featureList === 'object'
      ? featureList
      : featureList.split(',').map((item: string) => item.trim())

  const featCategories = convertFeatureList.filter((feat) =>
    PRE_DEFINED_FEATURES.some(
      (config) => !config.name.localeCompare(feat, undefined, { sensitivity: 'base' })
    )
  )

  return featCategories
}

export default features
