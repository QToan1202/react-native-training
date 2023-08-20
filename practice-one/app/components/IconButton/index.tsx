import { Image, ImageProps, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { imageStyles } from '@styles'
import styles from './styles'

export interface IconButtonProps extends TouchableOpacityProps {
  icon: ImageProps['source']
  noBackground?: boolean
  accessibilityLabel?: string
  onPress: () => void
}

const IconButton = ({
  icon,
  noBackground = false,
  accessibilityLabel,
  onPress,
  ...rest
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.btn, noBackground && styles.transparent]}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      {...rest}
    >
      <Image source={icon} style={imageStyles.icon} />
    </TouchableOpacity>
  )
}

export default IconButton
