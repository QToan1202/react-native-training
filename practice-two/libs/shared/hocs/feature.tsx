import { ReactNode } from 'react'

import { useFeatureFlags } from '../stores'
import { ErrorScreen } from '../screens'

interface FeatureProps {
  feat: string
  children: ReactNode
}

const Feature = ({ feat, children }: FeatureProps) => {
  const isFeatureActive = useFeatureFlags((state) => state.isFeatureActive)

  if (isFeatureActive(feat)) return children

  // If feature unavailable show an error screen
  // that bring user back to the previous screen
  return (
    <ErrorScreen title="Feature on working progress" messages="This feature is coming soon!!!" />
  )
}

export default Feature
