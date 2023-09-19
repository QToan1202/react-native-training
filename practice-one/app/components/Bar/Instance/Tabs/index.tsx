import { Platform } from 'react-native'

import Bar, { BarProps } from '@components/Bar'
import Button from '@components/Button'
import { containerStyles } from '@styles'

import styles from './styles'

export interface TabBar extends BarProps {
  title: string
  onPress: () => void
}

const TabBar = ({ title, onPress, style, ...rest }: TabBar) => {
  const isAndroid = Platform.OS === 'android'

  return (
    <Bar
      style={[styles.container, isAndroid ? styles.elevation : styles.shadow, style]}
      title=""
      {...rest}
    >
      <Button style={containerStyles.expand} title={title} onPress={onPress} />
    </Bar>
  )
}

export default TabBar
