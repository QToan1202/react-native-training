import {
  ImageBackground,
  ImageBackgroundProps,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native'

import Paragraph from '@components/Paragraph'
import Button from '@components/Button'
import styles from './styles'

export interface SliderItemProps extends ImageBackgroundProps {
  source: ImageBackgroundProps['source']
  title: string
  btnTitle: string
  style?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
  onPress: () => void
}

const SliderItem = ({
  source,
  title,
  btnTitle,
  style,
  imageStyle,
  onPress,
  ...rest
}: SliderItemProps) => {
  return (
    <ImageBackground
      source={source}
      style={[styles.container, style]}
      imageStyle={imageStyle}
      {...rest}
    >
      <Paragraph content={title} style={styles.content} />
      <Button
        title={btnTitle}
        style={styles.btn}
        titleStyle={styles.btnTitle}
        variant="tertiary"
        shrink
        activeOpacity={0.6}
        onPress={onPress}
      />
    </ImageBackground>
  )
}

export default SliderItem
