import { GetProps, styled, YStack } from 'tamagui'

const SkeletonFrame = styled(YStack, {
  name: 'Skeleton',
  backgroundColor: '$skeleton',
  position: 'relative',
  overflow: 'hidden',
  variants: {
    variants: {
      circular: {
        aspectRatio: 1 / 1,
        width: 50,
        borderRadius: 50,
      },
      rectangular: {},
      rounded: {
        width: '100%',
        borderRadius: 5,
      },
    } as const,
  },
  defaultVariants: { variants: 'rounded' },
})

export type SkeletonFrameProps = GetProps<typeof SkeletonFrame>

export default SkeletonFrame
