import { useCallback } from 'react'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

import Bar from '@components/Bar'

import styles from './styles'

const CheckoutBar = ({ options, route, navigation }: BottomTabHeaderProps) => {
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation])

  return (
    <Bar
      style={styles.container}
      title={options.headerTitle?.toString() || route.name}
      align="center"
      showBackBtn
      onPressBack={handleGoBack}
    />
  )
}

export default CheckoutBar
