import { ReactNode } from 'react'
import ButtonStyled, { ButtonProps } from './Button'

export type IconButtonProps = ButtonProps & {
  children: ReactNode
  scaleIconSize?: number
}

const IconButton = ({ children, scaleIconSize, ...rest }: IconButtonProps) => (
  <ButtonStyled variant="outlined" borderRadius={0} boc="transparent" p={6} {...rest}>
    <ButtonStyled.Icon scaleIcon={scaleIconSize}>{children}</ButtonStyled.Icon>
  </ButtonStyled>
)

export default IconButton
