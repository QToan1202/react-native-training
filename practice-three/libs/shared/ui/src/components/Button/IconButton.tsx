import { ReactNode } from 'react'
import ButtonStyled, { ButtonProps } from './Button'

export type IconButtonProps = ButtonProps & {
  children: ReactNode
  scaleIconSize?: number
}

const IconButton = ButtonStyled.styleable<IconButtonProps>(
  ({ children, scaleIconSize, ...rest }: IconButtonProps, ref) => (
    <ButtonStyled ref={ref} variant="outlined" borderRadius={0} boc="transparent" p={6} {...rest}>
      <ButtonStyled.Icon scaleIcon={scaleIconSize}>{children}</ButtonStyled.Icon>
    </ButtonStyled>
  )
)

export default IconButton
