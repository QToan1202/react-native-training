import { useCallback } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import Bar from '@components/Bar'

import styles from './styles'

const CheckoutBar = ({ options, route, navigation }: NativeStackHeaderProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleGoBack = useCallback(() => navigation.goBack(), [])

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
