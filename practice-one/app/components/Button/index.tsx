import {
  Image,
  ImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native'

import { TButtonVariant } from '@types'
import Paragraph from '@components/Paragraph'

import { imageStyles } from '@styles'
import styles from './styles'

export interface ButtonProps extends TouchableOpacityProps {
  title: string
  leftIcon?: ImageProps['source']
  rightIcon?: ImageProps['source']
  variant?: TButtonVariant
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
        {leftIcon && <Image source={leftIcon} style={imageStyles.icon} />}
        <Paragraph size="md" style={[styles[variant], styles.btnTitle]} content={title} />
        {rightIcon && <Image source={rightIcon} style={imageStyles.icon} />}
      </View>
    </TouchableOpacity>
  )
}

export default Button
