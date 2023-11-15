import { memo } from 'react'
import isEqual from 'react-fast-compare'

import StyledParagraph, { StyledParagraphProps } from './styles'

export type ParagraphProps = {
  content: string
} & StyledParagraphProps

const Paragraph = ({ content, ...rest }: ParagraphProps) => {
  return <StyledParagraph {...rest}>{content}</StyledParagraph>
}

export default memo(Paragraph, isEqual)
