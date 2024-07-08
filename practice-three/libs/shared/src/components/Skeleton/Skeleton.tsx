import { ReactNode } from 'react'
import { GetProps, styled, VisuallyHidden, YStack } from 'tamagui'

import styles from './styles.module.css'

const SkeletonFrame = styled(YStack, {
  name: 'Skeleton',
  backgroundColor: '$backgroundHover',
  overflow: 'hidden',
  position: 'relative',

  className: styles['skeleton'],
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

export type SkeletonProps = GetProps<typeof SkeletonFrame> & {
  children?: ReactNode
}

const Skeleton = ({ children, ...rest }: SkeletonProps) => {
  return (
    <SkeletonFrame {...rest}>
      <VisuallyHidden preserveDimensions>{children}</VisuallyHidden>
    </SkeletonFrame>
  )
}

export default Skeleton
