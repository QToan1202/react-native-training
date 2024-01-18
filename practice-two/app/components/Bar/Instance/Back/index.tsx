import { useCallback } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import Bar from '@components/Bar'

const BackBar = ({ options, route, navigation }: NativeStackHeaderProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleGoBack = useCallback(() => navigation.goBack(), [])

  return (
    <Bar
      title={options.headerTitle?.toString() || route.name}
      align="center"
      paddingBottom="$space.6"
      showBackBtn
      onPressBack={handleGoBack}
    />
  )
}

export default BackBar
