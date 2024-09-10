import { GetProps, Text as TText, Token, getTokenValue, styled } from 'tamagui'

const Text = styled(TText, {
  name: 'Text',
  tag: 'p',
  fontWeight: '400',
  fontFamily: '$body',
  color: '$black',
  variants: {
    fontSize: {
      '...fontSize': (size) => ({
        fontSize: size,
        lineHeight: getTokenValue(size as Token, 'fonts') * 1.5,
      }),
    },
  } as const,
  defaultVariants: {
    fontSize: '$true',
  },
})

export type TextProps = GetProps<typeof Text>

export default Text
