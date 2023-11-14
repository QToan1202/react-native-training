import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image, ImageProps, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { imageStyles } from '@styles'
import styles from './styles'

export interface IconButtonProps extends TouchableOpacityProps {
  icon: ImageProps['source']
  noBackground?: boolean
  accessibilityLabel?: string
}

const IconButton = ({
  icon,
  noBackground = false,
  accessibilityLabel,
  style,
  ...rest
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.btn, noBackground && styles.transparent, style]}
      accessibilityLabel={accessibilityLabel}
      {...rest}
    >
      <Image source={icon} style={imageStyles.icon} />
    </TouchableOpacity>
  )
}

export default memo(IconButton, isEqual)
