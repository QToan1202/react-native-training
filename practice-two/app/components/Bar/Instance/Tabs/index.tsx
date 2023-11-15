import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getTokenValue } from 'tamagui'

import Bar, { BarProps } from '@components/Bar'
import Button from '@components/Button'

import styles from './styles'

export interface TabBar extends BarProps {
  title: string
  onPress: () => void
}

const TabBar = ({ title, onPress, ...rest }: TabBar) => {
  const insets = useSafeAreaInsets()

  return (
    <Bar
      $platform-ios={styles.shadow}
      $platform-android={{ elevation: 24 }}
      paddingHorizontal="$space.6"
      backgroundColor="$color.white"
      paddingTop="$space.3"
      paddingBottom={getTokenValue('$space.3') + insets.bottom}
      title=""
      {...rest}
    >
      <Button flex={1} title={title} onPress={onPress} />
    </Bar>
  )
}

export default TabBar
