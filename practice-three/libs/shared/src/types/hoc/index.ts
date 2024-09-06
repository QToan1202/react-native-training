import { RouteObject } from 'react-router-dom'

export type THOCsProps = {
  category: string[]
  navigatorData: {
    [featureName: string]: RouteObject[]
  }
}

export type TFeatureConfig = {
  name: string
  description: string
}
