import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getTokenValue } from 'tamagui'

import Bar, { BarProps } from '@components/Bar'
import Button from '@components/Button'

import styles from './styles'

export interface TabBar extends BarProps {
  title: string
  isDisable?: boolean
  onPress?: () => void
}

const TabBar = ({ title, isDisable, onPress, ...rest }: TabBar) => {
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
      <Button flex={1} title={title} isDisable={isDisable} onPress={onPress} />
    </Bar>
  )
}

export default memo(TabBar, isEqual)
