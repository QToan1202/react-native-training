import { GetProps, Paragraph, styled } from 'tamagui'

const StyledParagraph = styled(Paragraph, {
  fontWeight: '$true',
  color: '$color.white',
})

export type StyledParagraphProps = GetProps<typeof StyledParagraph>

export default StyledParagraph
