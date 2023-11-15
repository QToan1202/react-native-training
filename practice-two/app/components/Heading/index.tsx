import { memo } from 'react'
import isEqual from 'react-fast-compare'

import StyledHeading, { StyledHeadingProps } from './styles'

export type HeadingProps = {
  content: string
} & StyledHeadingProps

const Heading = ({ content, ...rest }: HeadingProps) => {
  return (
    <StyledHeading size="$5" fontWeight="$4" color="$color.white" letterSpacing="$2" {...rest}>
      {content}
    </StyledHeading>
  )
}

export default memo(Heading, isEqual)
