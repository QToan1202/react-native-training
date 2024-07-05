import { ReactNode } from 'react'
import { GetProps, styled, VisuallyHidden, YStack } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

const SkeletonFrame = styled(YStack, {
  name: 'Skeleton',
  backgroundColor: '$backgroundHover',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: 4,
})

const SkeletonShine = styled(LinearGradient, {
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '25%',
  colors: ['$background', '$color'],
})

export type SkeletonProps = GetProps<typeof SkeletonFrame> & {
  children: ReactNode
}

const Skeleton = ({ children, ...rest }: SkeletonProps) => {
  return (
    <SkeletonFrame {...rest}>
      <SkeletonShine />
      <VisuallyHidden preserveDimensions>{children}</VisuallyHidden>
    </SkeletonFrame>
  )
}

export default Skeleton
