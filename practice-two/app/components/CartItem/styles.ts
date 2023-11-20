import { GetProps, getTokenValue, styled } from 'tamagui'
import { Image } from 'react-native'

import Paragraph from '@components/Paragraph'

export const StyledText = styled(Paragraph, {
  content: '',
  fontWeight: '$2',
  color: '$color.gray_50',
  textTransform: 'capitalize',
})

export type StyledTextProps = GetProps<typeof StyledText>

export const StyledImage = styled(Image, {
  source: { uri: '' },
  width: 102,
  height: 102,
  borderRadius: getTokenValue('$radius.5'),
})

export type StyledImageProps = GetProps<typeof StyledImage>
