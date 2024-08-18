import { TFeatureConfig } from '@shared/types'

const PRE_DEFINED_FEATURES: Array<Omit<TFeatureConfig, 'active'>> = [
  {
    name: 'authentication',
    description:
      'Enjoy a secure and reliable authentication experience with advanced encryption and multi-factor authentication options.',
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
