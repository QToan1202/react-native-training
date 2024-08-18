import { GetProps, XStack, styled } from 'tamagui'

const Wrapper = styled(XStack, {
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '$border',
  variants: {
    variant: {
      error: {
        borderColor: '$red_50',
      },
      disabled: {
        disabledStyle: {
          backgroundColor: '$gray_50',
        },
      },
    },
  } as const,
})

export type StyledWrapperProps = GetProps<typeof Wrapper>
export default Wrapper
