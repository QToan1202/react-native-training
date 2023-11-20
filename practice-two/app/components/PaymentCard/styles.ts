import { GetProps, styled } from 'tamagui'
import { Image, ImageBackground } from 'react-native'

import Paragraph from '@components/Paragraph'

export const StyledImageBackground = styled(ImageBackground, {
  name: 'ImageBackground',
  source: { uri: '' },
  flexDirection: 'row',
  alignItems: 'flex-end',
  alignSelf: 'flex-start',
  paddingVertical: '$space.3',
  paddingHorizontal: 17,
  columnGap: 17,
  borderRadius: 9,
  overflow: 'hidden',
  maxHeight: 146,
  maxWidth: 246,
})

export type StyledImageBackgroundProps = GetProps<typeof StyledImageBackground>

export const StyledTitle = styled(Paragraph, {
  content: '',
  color: '$color.gray_200',
  fontSize: 13,
  textTransform: 'capitalize',
})

export type StyledTitleProps = GetProps<typeof StyledTitle>

export const StyledImage = styled(Image, {
  name: 'IconImage',
  source: { uri: '' },
  position: 'absolute',
  zIndex: '$zIndex.1',
  right: '$space.-0.5',
  bottom: '$space.-2.5',
})

export type StyledImageProps = GetProps<typeof StyledImage>
