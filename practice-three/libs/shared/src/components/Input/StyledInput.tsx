import { GetProps, Input as TInput, styled } from 'tamagui'

const StyledInput = styled(TInput, {
  unstyled: true,
  name: 'Input',
  tag: 'input',
  paddingVertical: 11,
  paddingHorizontal: 15,
  borderRadius: 5,
  width: '100%',
  color: '$pure_black',
  focusStyle: {
    outlineWidth: 0,
  },
  placeholderTextColor: '$gray_100',
})

export type StyledInputProps = GetProps<typeof StyledInput>
export default StyledInput
