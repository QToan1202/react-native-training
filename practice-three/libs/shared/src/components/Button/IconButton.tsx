import { ReactNode } from 'react'
import ButtonStyled, { ButtonProps } from './Button'

export type IconButtonProps = ButtonProps & {
  icon: ReactNode
  scaleIconSize?: number
}

const IconButton = ({ icon, scaleIconSize, ...rest }: IconButtonProps) => (
  <ButtonStyled variant="outlined" borderRadius={0} boc="transparent" p={6} {...rest}>
    <ButtonStyled.Icon scaleIcon={scaleIconSize}>{icon}</ButtonStyled.Icon>
  </ButtonStyled>
)

export default IconButton
