import StyledButton, { ButtonProps as StyledButtonProps } from './Button'

export type ButtonProps = StyledButtonProps & {
  title: string
}

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <StyledButton {...rest}>
      <StyledButton.Text>{title}</StyledButton.Text>
    </StyledButton>
  )
}

export default Button
