import { ReactNode } from 'react'
import { VisuallyHidden } from 'tamagui'
import Animated, { Keyframe } from 'react-native-reanimated'

import SkeletonFrame, { SkeletonFrameProps } from './SkeletonFrame'
import SkeletonIndicator from './SkeletonIndicator'

export type SkeletonProps = SkeletonFrameProps & {
  animate?: 'wave' | 'pulse' | false
  children?: ReactNode
}

const AnimatedSkeletonFrame = Animated.createAnimatedComponent(SkeletonFrame)
const pulseKeyframe = new Keyframe({
  0: {
    opacity: 1,
  },
  50: {
    opacity: 0.4,
  },
  100: {
    opacity: 1,
  },
})
  .duration(2000)
  .delay(500)

const waveKeyframe = new Keyframe({
  0: {
    transform: [{ translateX: -Infinity }],
  },
  50: {
    transform: [{ translateX: Infinity }],
  },
  100: {
    transform: [{ translateX: Infinity }],
  },
})
  .duration(2000)
  .delay(500)

const Skeleton = ({ children, animate = 'pulse', ...rest }: SkeletonProps) => {
  return (
    <AnimatedSkeletonFrame exiting={animate === 'pulse' ? pulseKeyframe : undefined} {...rest}>
      {animate === 'wave' && <SkeletonIndicator exiting={waveKeyframe} />}
      <VisuallyHidden preserveDimensions>{children}</VisuallyHidden>
    </AnimatedSkeletonFrame>
  )
}

export default Skeleton
