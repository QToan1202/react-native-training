import { useRef } from 'react'
import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Bar, { BarProps } from '@components/Bar'
import Button from '@components/Button'
import { containerStyles } from '@styles'

import styles from './styles'

export interface TabBar extends BarProps {
  title: string
  onPress: () => void
}

const TabBar = ({ title, onPress, style, ...rest }: TabBar) => {
  const isAndroid = useRef<boolean>(Platform.OS === 'android')
  const insets = useSafeAreaInsets()

  return (
    <Bar
      style={[
        styles.container,
        isAndroid.current ? styles.elevation : styles.shadow,
        { paddingTop: 12, paddingBottom: insets.bottom },
        style,
      ]}
      title=""
      {...rest}
    >
      <Button style={containerStyles.expand} title={title} onPress={onPress} />
    </Bar>
  )
}

export default TabBar
