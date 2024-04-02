import { GetProps, Text, styled } from 'tamagui'

const StyledText = styled(Text, {
  fontWeight: '400',
  fontFamily: '$body',
  color: '$color.black',
})

export type StyledTextProps = GetProps<typeof StyledText>

export default StyledText
