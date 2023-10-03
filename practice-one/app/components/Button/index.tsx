import { memo, useMemo } from 'react'
import isEqual from 'react-fast-compare'
import {
  Image,
  ImageProps,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native'

import { TButtonVariant } from '@types'
import Paragraph from '@components/Paragraph'
import { imageStyles } from '@styles'
import { COLORS } from '@constants'

import styles from './styles'

export interface ButtonProps extends TouchableOpacityProps {
  title: string
  leftIcon?: ImageProps['source']
  rightIcon?: ImageProps['source']
  variant?: TButtonVariant
  shrink?: boolean
  style?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
  onPress: () => void
}

const Button = ({
  title,
  leftIcon,
  rightIcon,
  variant = 'primary',
  shrink = false,
  style,
  titleStyle,
  onPress,
  ...rest
}: ButtonProps) => {
  const titleVariantStyle = useMemo((): TextStyle => {
    switch (variant) {
      case 'primary':
        return { color: COLORS.WHITE }
      case 'secondary':
        return { color: COLORS.PRIMARY }
      case 'tertiary':
        return { color: COLORS.WHITE }
      case 'quaternary':
        return { color: COLORS.BLACK }
      default:
        return { color: COLORS.WHITE }
    }
  }, [variant])

  return (
    <TouchableOpacity
      style={[styles.btn, styles[variant], shrink && styles.btnSmall, style]}
      onPress={onPress}
      {...rest}
    >
      <View style={styles.btnContent}>
        {leftIcon && <Image source={leftIcon} style={imageStyles.icon} />}
        <Paragraph
          size="md"
          style={[titleVariantStyle, styles.btnTitle, titleStyle]}
          content={title}
        />
        {rightIcon && <Image source={rightIcon} style={imageStyles.icon} />}
      </View>
    </TouchableOpacity>
  )
}

export default memo(Button, isEqual)
