import {
  ImageBackground,
  ImageBackgroundProps,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

import Paragraph from '@components/Paragraph'
import { imageStyles } from '@styles'

import styles from './styles'

export interface MenuCardProps extends ImageBackgroundProps {
  source: ImageBackgroundProps['source']
  name: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
}

const MenuCard = ({ source, name, style, imageStyle, onPress, ...rest }: MenuCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        source={source}
        style={[imageStyles.menu, styles.content, style]}
        imageStyle={imageStyle}
        {...rest}
      >
        <Paragraph content={name} style={styles.name} />
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default MenuCard
