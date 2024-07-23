import { TFeatureConfig } from '@shared/types'

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
