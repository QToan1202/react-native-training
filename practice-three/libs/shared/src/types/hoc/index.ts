import { RouteObject } from 'react-router-dom'

export type THOCsProps = {
  category: string[]
  navigatorData: RouteObject[]
}

export type TFeatureConfig = {
  name: string
  description: string
  active: boolean
}
