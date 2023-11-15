import { useCallback } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import Bar from '@components/Bar'

const CheckoutBar = ({ options, route, navigation }: NativeStackHeaderProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleGoBack = useCallback(() => navigation.goBack(), [])

  return (
    <Bar
      title={options.headerTitle?.toString() || route.name}
      align="center"
      paddingBottom={10}
      showBackBtn
      onPressBack={handleGoBack}
    />
  )
}

export default CheckoutBar
