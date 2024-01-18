import { GetProps, Text, styled } from 'tamagui'

const StyledParagraph = styled(Text, {
  fontWeight: '$true',
  fontFamily: '$body',
  color: '$color.white',
})

export type StyledParagraphProps = GetProps<typeof StyledParagraph>

export default StyledParagraph
