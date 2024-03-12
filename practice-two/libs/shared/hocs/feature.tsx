import { ReactNode, useCallback } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useFeatureFlags } from '../stores'

interface FeatureProps {
  feat: string
  children: ReactNode
}

const Feature = ({ feat, children }: FeatureProps) => {
  const isFeatureActive = useFeatureFlags((state) => state.isFeatureActive)
  const navigation = useNavigation()
  const handleNavigateBack = useCallback(() => {
    navigation.goBack()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isFeatureActive(feat)) return children

  // If feature unavailable show an alert with single option
  // that bring user back to the previous screen
  Alert.alert('Feature on working progress', 'This feature is coming soon!!!', [
    { text: 'OK', onPress: handleNavigateBack },
  ])
  return null
}

export default Feature
