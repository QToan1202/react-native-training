import StyledText, { StyledTextProps } from './styles'

const Text = StyledText.styleable<StyledTextProps>(({ children, ...rest }, ref) => {
  return (
    <StyledText ref={ref} {...rest}>
      {children}
    </StyledText>
  )
})

export default Text
