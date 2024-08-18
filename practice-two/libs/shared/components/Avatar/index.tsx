import { memo, useMemo, useRef } from 'react'
import isEqual from 'react-fast-compare'
import { getTokens, Circle, SizeTokens } from 'tamagui'
import { ImageStyle, StyleProp } from 'react-native'

import Paragraph from '../Paragraph'

import StyledStack, { StyledImage, StyledImageProps, StyledStackProps } from './styles'

export type AvatarProps = StyledStackProps & {
  source: StyledImageProps['source']
  name: string
  size: SizeTokens
}

const Avatar = ({ source, name, size = 'sm', ...rest }: AvatarProps) => {
  const imageSize = useRef<number>(getTokens().avatar[size].val)
  const imageStyle = useMemo<StyleProp<ImageStyle>>(
    () => ({
      width: imageSize.current,
      height: imageSize.current,
      borderRadius: 50,
    }),
    []
  )

  return (
    <StyledStack space={10} {...rest}>
      <Circle>
        <StyledImage source={source} style={imageStyle} accessibilityLabel={`${name}-avatar`} />
      </Circle>
      <Paragraph
        numberOfLines={1}
        color="$color.gray_50"
        textTransform="capitalize"
        lineHeight="$3"
        fontWeight="$2"
        content={name}
      />
    </StyledStack>
  )
}

export default memo(Avatar, isEqual)
