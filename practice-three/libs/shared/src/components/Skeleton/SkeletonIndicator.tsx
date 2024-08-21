import { forwardRef } from 'react'
import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import { getTokenValue } from 'tamagui'

export type SkeletonIndicatorProps = Omit<LinearGradientProps, 'colors'>

const SkeletonIndicator = forwardRef<LinearGradient, SkeletonIndicatorProps>(
  (props, skeletonRef) => (
    <LinearGradient
      ref={skeletonRef}
      style={StyleSheet.absoluteFill}
      start={[0, 0]}
      end={[1, 0]}
      colors={['transparent', getTokenValue('$color.skeletonIndicator'), 'transparent']}
      {...props}
    />
  )
)

const AnimatedSkeletonIndicator = Animated.createAnimatedComponent(SkeletonIndicator)

export default AnimatedSkeletonIndicator
