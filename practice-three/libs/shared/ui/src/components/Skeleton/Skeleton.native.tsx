import { ReactNode, useEffect } from 'react'
import { VisuallyHidden } from 'tamagui'
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

import SkeletonFrame, { SkeletonFrameProps } from './SkeletonFrame'
import SkeletonIndicator from './SkeletonIndicator'

export type SkeletonProps = SkeletonFrameProps & {
  animate?: 'wave' | 'pulse' | false
  children?: ReactNode
}

const AnimatedSkeletonFrame = Animated.createAnimatedComponent(SkeletonFrame)

const Skeleton = ({ children, animate = 'wave', ...rest }: SkeletonProps) => {
  const sv = useSharedValue<number>(0.5)
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: sv.value,
  }))

  useEffect(() => {
    sv.value = withDelay(
      500,
      withRepeat(
        withTiming(1, {
          duration: 1750,
          easing: Easing.inOut(Easing.quad),
          reduceMotion: ReduceMotion.System,
        }),
        -1,
        true // Make animation reverse to prevent flick UI
      )
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatedSkeletonFrame style={animate === 'pulse' ? animatedStyle : undefined} {...rest}>
      {animate === 'wave' && <SkeletonIndicator />}
      <VisuallyHidden preserveDimensions>{children}</VisuallyHidden>
    </AnimatedSkeletonFrame>
  )
}

export default Skeleton
