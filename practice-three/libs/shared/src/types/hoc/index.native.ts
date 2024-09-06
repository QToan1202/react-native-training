import { ReactNode } from 'react'

export type THOCsProps = {
  category: string[]
  navigatorData: (() => ReactNode)[]
}
