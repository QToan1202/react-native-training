import { GetProps, XStack, styled } from 'tamagui'

const Wrapper = styled(XStack, {
  borderRadius: 5,
  borderWidth: 1,
  variants: {
    variant: {
      normal: {
        borderColor: '$border',
      },
      error: {
        borderColor: '$red_50',
      },
    },
  } as const,

  defaultVariants: { variant: 'normal' },
})

export type StyledWrapperProps = GetProps<typeof Wrapper>
export default Wrapper
