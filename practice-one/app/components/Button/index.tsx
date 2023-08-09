import { TouchableOpacity, ViewStyle } from 'react-native'

import Text from '@components/Text'
import styles from './styles'

export interface ButtonProps {
  title: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  shrink?: boolean
  style?: ViewStyle | ViewStyle[]
  onPress: () => void
}

const Button = ({ title, variant = 'primary', shrink = false, style, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles[variant], shrink && styles.btnSmall, style]}
      onPress={onPress}
    >
      <Text size="md" style={[styles[variant], styles.btnTitle]} content={title} />
    </TouchableOpacity>
  )
}

export default Button
