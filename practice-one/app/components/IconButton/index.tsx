import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'

export interface IconButtonProps {
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
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.btn, noBackground && styles.transparent]}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

export default IconButton
