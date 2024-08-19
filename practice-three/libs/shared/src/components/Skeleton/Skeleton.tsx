import { ReactNode } from 'react'
import { VisuallyHidden } from 'tamagui'

import SkeletonFrame, { SkeletonFrameProps } from './SkeletonFrame'
import styles from './styles.module.css'

export type SkeletonProps = SkeletonFrameProps & {
  animate?: 'wave' | 'pulse' | false
  children?: ReactNode
}

const Skeleton = ({ children, animate = 'wave', ...rest }: SkeletonProps) => {
  return (
    <SkeletonFrame className={styles[animate || '']} {...rest}>
      <VisuallyHidden preserveDimensions>{children}</VisuallyHidden>
    </SkeletonFrame>
  )
}

export default Skeleton
