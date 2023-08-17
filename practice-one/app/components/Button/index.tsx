import { TouchableOpacity, View, ViewStyle } from 'react-native'

import { ReactNode } from 'react'

import Paragraph from '@components/Paragraph'
import styles from './styles'

export interface ButtonProps {
  title: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  shrink?: boolean
  style?: ViewStyle | ViewStyle[]
  onPress: () => void
}

const Button = ({
  title,
  leftIcon,
  rightIcon,
  variant = 'primary',
  shrink = false,
  style,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles[variant], shrink && styles.btnSmall, style]}
      onPress={onPress}
    >
      <View style={styles.btnContent}>
        {leftIcon}
        <Paragraph size="md" style={[styles[variant], styles.btnTitle]} content={title} />
        {rightIcon}
      </View>
    </TouchableOpacity>
  )
}

export default Button
