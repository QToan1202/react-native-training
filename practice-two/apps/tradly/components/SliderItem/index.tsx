import { memo } from 'react'
import isEqual from 'react-fast-compare'
import {
  ImageBackground,
  ImageBackgroundProps,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { Paragraph, Button } from '@practice-two/shared'
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
      <Paragraph
        content={title}
        maxWidth={200}
        marginLeft="$space.4"
        lineHeight="$2"
        letterSpacing="$6"
        fontWeight="$3"
        textTransform="uppercase"
        textOverflow="ellipsis"
      />
      <Button
        shrink
        title={btnTitle}
        marginLeft="$space.3"
        paddingVertical={4}
        paddingHorizontal="$space.3"
        variant="tertiary"
        fontWeight="$4"
        lineHeight="$4"
        fontSize={12}
        textTransform="uppercase"
        pressStyle={{ opacity: 0.6 }}
        onPress={onPress}
      />
    </ImageBackground>
  )
}

export default memo(SliderItem, isEqual)
