import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image, ImageProps } from 'react-native'
import { Circle, StackProps, Tokens, getTokens } from 'tamagui'

import { imageStyles } from '@styles'
import Paragraph from '@components/Paragraph'

import StyledStack from './styles'

export type AvatarProps = {
  source: ImageProps['source']
  name: string
  size: keyof Tokens['avatar']
} & StackProps

const Avatar = ({ source, name, size = 'sm', ...rest }: AvatarProps) => {
  return (
    <StyledStack space={10} {...rest}>
      <Circle size={getTokens().avatar[size].val}>
        <Image source={source} style={imageStyles.round} accessibilityLabel={`${name}-avatar`} />
      </Circle>
      <Paragraph
        numberOfLines={1}
        color="$color.gray_50"
        textTransform="capitalize"
        fontWeight="$2"
        content={name}
      />
    </StyledStack>
  )
}

export default memo(Avatar, isEqual)
