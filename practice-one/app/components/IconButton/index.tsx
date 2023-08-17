import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styles from './styles'

export interface IconButtonProps extends TouchableOpacityProps {
  children: ReactNode
  noBackground?: boolean
  accessibilityLabel?: string
  onPress: () => void
}

const IconButton = ({
  children,
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
      {children}
    </TouchableOpacity>
  )
}

export default IconButton
