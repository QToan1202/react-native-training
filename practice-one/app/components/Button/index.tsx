import { TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native'

import { ReactNode } from 'react'

import Paragraph from '@components/Paragraph'
import styles from './styles'

export interface ButtonProps extends TouchableOpacityProps {
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
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles[variant], shrink && styles.btnSmall, style]}
      onPress={onPress}
      {...rest}
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
