import { TFeatureConfig } from '@shared/types'

const preDefinedFeatures: Array<Omit<TFeatureConfig, 'active'>> = [
  {
    name: 'authentication',
    description:
      'Enjoy a secure and reliable authentication experience with advanced encryption and multi-factor authentication options.',
  },
]

const features = (featureList: string | ReadonlyArray<string>): Array<TFeatureConfig> => {
  const convertFeatureList =
    typeof featureList === 'object'
      ? featureList
      : featureList.split(',').map((item: string) => item.trim())

  return preDefinedFeatures.map((config) => ({
    ...config,
    active: convertFeatureList.some(
      (feat) => !feat.localeCompare(config.name, undefined, { sensitivity: 'base' })
    ),
  }))
}

export default features
