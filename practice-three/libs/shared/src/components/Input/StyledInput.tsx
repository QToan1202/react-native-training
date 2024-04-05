import { GetProps, Input as TInput, getTokenValue, styled } from 'tamagui'

const StyledInput = styled(TInput, {
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#e1e2e7',
  placeholderTextColor: getTokenValue('$color.gray_100'),
})

export type StyledInputProps = GetProps<typeof StyledInput>
export default StyledInput
