import { TFeatureConfig } from '@practice-three/types'

const PRE_DEFINED_FEATURES: Array<Omit<TFeatureConfig, 'active'>> = [
  {
    name: 'authentication',
    description:
      'Enjoy a secure and reliable authentication experience with advanced encryption and multi-factor authentication options.',
  },
  {
    name: 'product',
    description:
      'The "Product" feature flag controls the availability of product-related functionalities within the application. It allows administrators to enable or disable product listings, detail pages, and associated features, facilitating a controlled rollout of updates and ensuring a smooth user experience.',
  },
  {
    name: 'cart',
    description:
      'The Cart feature flag controls the visibility and functionality of the shopping cart within the application. When enabled, users can add items to their cart, view the cart contents, update item quantities, and proceed to checkout.',
  },
  {
    name: 'checkout',
    description:
      'The Checkout feature flag controls the access to the checkout process within the application. When enabled, users can review their final order, enter shipping information, choose a delivery method, and place their order.',
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
