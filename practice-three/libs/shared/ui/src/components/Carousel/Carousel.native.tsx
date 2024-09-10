import { useCallback, useMemo, useRef, useState } from 'react'
import RNCarousel, { ICarouselInstance, TCarouselProps } from 'react-native-reanimated-carousel'
import { getTokenValue, useWindowDimensions, XStack, YStack } from 'tamagui'

import { IconButton } from '../Button'
import { Dot } from '@practice-three/shared/asset'

import { BaseCarouselProps } from './types'

export type CarouselProps<T> = TCarouselProps<T> & Omit<BaseCarouselProps<T>, 'isShowNavigation'>

const Carousel = <T,>({ isShowIndex = true, ...props }: CarouselProps<T>) => {
  const { data, defaultIndex = 0, height } = props
  const { width } = useWindowDimensions()
  const [defaultSize] = useState(() => ({
    width,
    height: width * (4 / 3), // Sizing height with aspect ratio 4/3 on default
  }))
  const ref = useRef<ICarouselInstance>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex)
  const onPressPagination = useCallback((index: number) => {
    ref.current?.scrollTo({
      index,
      animated: true,
    })
  }, [])
  const renderPagination = useMemo(() => {
    if (!isShowIndex) return null

    const handlePressPaginateBtn = (index: number) => () => onPressPagination(index)

    return data.map((_, index) => (
      <IconButton key={index} padding={0} hitSlop={4} onPress={handlePressPaginateBtn(index)}>
        <Dot
          {...(currentIndex === index && {
            width: 7,
            height: 7,
            fill: getTokenValue('$color.primary'),
          })}
        />
      </IconButton>
    ))
  }, [isShowIndex, currentIndex, data, onPressPagination])
  const handleChangeCarousel = useCallback(
    () => setCurrentIndex(ref.current?.getCurrentIndex() || 0),
    []
  )

  return (
    <YStack gap={10} justifyContent="center" alignItems="center">
      {/* Wrap with Stack since Carousel overlay on another layer */}
      <YStack width={width || defaultSize.width} height={height || defaultSize.height}>
        <RNCarousel
          ref={ref}
          defaultIndex={defaultIndex}
          width={defaultSize.width}
          height={defaultSize.height}
          onProgressChange={handleChangeCarousel}
          {...props}
        />
      </YStack>
      {isShowIndex && (
        <XStack justifyContent="center" alignItems="center" gap={5}>
          {renderPagination}
        </XStack>
      )}
    </YStack>
  )
}

export default Carousel
