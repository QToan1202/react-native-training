import { GetProps, Text as TText, styled } from 'tamagui'

const Text = styled(TText, {
  name: 'Text',
  tag: 'p',
  fontSize: '$true',
  fontWeight: '400',
  fontFamily: '$body',
  color: '$color.black',
})

export type TextProps = GetProps<typeof Text>

export default Text
