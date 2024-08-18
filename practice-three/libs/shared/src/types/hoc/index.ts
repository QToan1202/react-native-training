import { ReactNode } from 'react'

export type THOCsProps = {
  category: string[]
  navigatorData: (() => ReactNode)[]
}

export type TFeatureConfig = {
  name: string
  description: string
  active: boolean
}
