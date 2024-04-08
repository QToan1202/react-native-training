import { GetProps, Input as TInput, styled } from 'tamagui'

const StyledInput = styled(TInput, {
  unstyled: true,
  name: 'Input',
  tag: 'input',
  paddingVertical: 11,
  paddingHorizontal: 15,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#e1e2e7',
  backgroundColor: '$transparent',
  placeholderTextColor: '$gray_100',
})

export type StyledInputProps = GetProps<typeof StyledInput>
export default StyledInput
