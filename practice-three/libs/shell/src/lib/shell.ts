import { TFeatureConfig } from '@practice-three/types'

import {
  AUTH_FEATURE,
  CART_FEATURE,
  CHECKOUT_FEATURE,
  PRODUCT_FEATURE,
  PROFILE_FEATURE,
} from './featuresName'

const PRE_DEFINED_FEATURES: Array<TFeatureConfig> = [
  {
    name: AUTH_FEATURE,
    description:
      'Enjoy a secure and reliable authentication experience with advanced encryption and multi-factor authentication options.',
  },
  {
    name: PRODUCT_FEATURE,
    description:
      'The "Product" feature flag controls the availability of product-related functionalities within the application. It allows administrators to enable or disable product listings, detail pages, and associated features, facilitating a controlled rollout of updates and ensuring a smooth user experience.',
  },
  {
    name: CART_FEATURE,
    description:
      'The Cart feature flag controls the visibility and functionality of the shopping cart within the application. When enabled, users can add items to their cart, view the cart contents, update item quantities, and proceed to checkout.',
  },
  {
    name: CHECKOUT_FEATURE,
    description:
      'The Checkout feature flag controls the access to the checkout process within the application. When enabled, users can review their final order, enter shipping information, choose a delivery method, and place their order.',
  },
  {
    name: PROFILE_FEATURE,
    description:
      "The Profile feature flag controls access to the user's profile management. When enabled, users can view and edit their personal information, update contact details, manage payment methods, and review their order history.",
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
