import { forwardRef, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import { LinearGradient, LinearGradientProps } from 'react-native-linear-gradient'
import { getTokenValue, useWindowDimensions } from 'tamagui'

export type SkeletonIndicatorProps = Omit<LinearGradientProps, 'colors'>

const SkeletonIndicator = forwardRef<LinearGradient, SkeletonIndicatorProps>(
  (props, skeletonRef) => {
    const { width } = useWindowDimensions()
    const sv = useSharedValue<number>(-width)
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: sv.value }],
    }))

    useEffect(() => {
      sv.value = withDelay(
        500,
        withRepeat(
          withTiming(width, {
            duration: 1500,
            easing: Easing.linear,
            reduceMotion: ReduceMotion.System,
          }),
          -1
        )
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <Animated.View style={[styles.container, animatedStyle]}>
        <LinearGradient
          ref={skeletonRef}
          style={StyleSheet.absoluteFill}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['transparent', getTokenValue('$color.skeletonIndicator'), 'transparent']}
          {...props}
        />
      </Animated.View>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})

export default SkeletonIndicator
