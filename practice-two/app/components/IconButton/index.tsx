import { memo } from 'react'
import isEqual from 'react-fast-compare'

import StyledIconButton, { CustomButtonProps } from './styles'

export type IconButtonProps = CustomButtonProps

const IconButton = ({ children, ...rest }: IconButtonProps) => {
  return <StyledIconButton {...rest}>{children}</StyledIconButton>
}

export default memo(IconButton, isEqual)
