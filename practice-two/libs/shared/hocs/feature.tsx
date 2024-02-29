import { ReactNode } from 'react'
import { useFeatureFlags } from '../stores'

interface FeatureProps {
  feat: string
  children: ReactNode
}

const Feature = ({ feat, children }: FeatureProps) => {
  const isFeatureActive = useFeatureFlags((state) => state.isFeatureActive)

  if (isFeatureActive(feat)) return children

  return null
}

export default Feature
