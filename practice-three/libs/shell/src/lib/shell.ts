import { TFeatureConfig } from '@shared/types'

const preDefinedFeatures: Array<Omit<TFeatureConfig, 'active'>> = [
  {
    name: 'authentication',
    description:
      'Enjoy a secure and reliable authentication experience with advanced encryption and multi-factor authentication options.',
  },
]

const features = (featureList: string | ReadonlyArray<string>): Array<TFeatureConfig> => {
  let feats: Array<TFeatureConfig> = []
  const convertFeatureList =
    typeof featureList === 'object'
      ? featureList
      : featureList.split(',').map((item: string) => item.trim())

  convertFeatureList.forEach((feat: string) => {
    const matchedFeature: Omit<TFeatureConfig, 'active'> | undefined = preDefinedFeatures.find(
      (config) => config.name.localeCompare(feat, undefined, { sensitivity: 'base' })
    )
    feats = preDefinedFeatures.map((featConfig) => {
      if (!matchedFeature) {
        return { ...featConfig, ...{ active: false } }
      }

      return { ...featConfig, ...{ active: true } }
    })
  })
  console.log(convertFeatureList, feats)

  return feats
}

export default features
