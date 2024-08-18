import { memo } from 'react'
import isEqual from 'react-fast-compare'

import StyledParagraph, { StyledParagraphProps } from './styles'

export type ParagraphProps = StyledParagraphProps & {
  content: string
}

const Paragraph = StyledParagraph.styleable<ParagraphProps>(({ content, ...rest }, ref) => {
  return (
    <StyledParagraph ref={ref} {...rest}>
      {content}
    </StyledParagraph>
  )
})

export default memo(Paragraph, isEqual)
