import { Circle, GetProps, styled } from 'tamagui'

const CustomButton = styled(Circle, {
  name: 'IconButton',
  alignSelf: 'flex-start',
  padding: '$space.2',
  backgroundColor: '$color.blur_white',
  pressStyle: {
    opacity: 0.6,
  },

  variants: {
    noBackground: {
      true: {
        backgroundColor: '$color.transparent',
      },
    },
  } as const,
  defaultVariants: {
    noBackground: false,
  },
})

export type CustomButtonProps = GetProps<typeof CustomButton>

export default CustomButton
