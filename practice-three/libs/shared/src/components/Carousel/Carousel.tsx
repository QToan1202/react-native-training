import { useCallback, useEffect, useMemo, useState } from 'react'
import { GestureResponderEvent } from 'react-native'
import { AnimatePresence, getTokenValue, styled, XStack, YStack, YStackProps } from 'tamagui'

import { Image } from '../Image'
import { Dot } from '../../assets/images'
import { IconButton } from '../Button'

export type CarouselProps = YStackProps & {
  data: string[]
  autoplay?: boolean
}

const AUTOPLAY_TIMING = 2 * 1000 // seconds
const CAROUSEL_SLIDE_DIRECTION = {
  RIGHT: 1,
  LEFT: -1,
  STAY: 0,
}

const GalleryImage = styled(YStack, {
  zIndex: 1,
  x: 0,
  opacity: 1,
  fullscreen: true,

  variants: {
    going: {
      ':number': (going) => ({
        enterStyle: {
          x: going > CAROUSEL_SLIDE_DIRECTION.STAY ? '100%' : '-100%',
          opacity: 0,
        },
        exitStyle: {
          zIndex: 0,
          x: going < CAROUSEL_SLIDE_DIRECTION.STAY ? '100%' : '-100%',
          opacity: 0,
        },
      }),
    },
  } as const,
})

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const Carousel = ({
  data,
  autoplay = false,
  width = '100%',
  height = 300,
  ...rest
}: CarouselProps) => {
  const [[page, going], setPage] = useState<[number, number]>([0, 0])
  const paginate = useCallback(
    (going: number) => {
      setPage([page + going, going])
    },
    [page]
  )
  const [coordinate, setCoordinate] = useState<number>(0)
  const imageIndex = useMemo(() => wrap(0, data.length, page), [data.length, page])
  const renderDots = useMemo(
    () =>
      data.map((value: string) => {
        const dotIndex = data.findIndex((_value) => value === _value)
        const handlePressIconButton = () => paginate(dotIndex - imageIndex)

        return (
          <IconButton key={value} onPress={handlePressIconButton}>
            <Dot
              width={10}
              height={10}
              {...(imageIndex === dotIndex && {
                fill: getTokenValue('$color.primary'),
                width: 14,
                height: 14,
              })}
            />
          </IconButton>
        )
      }),
    [data, imageIndex, paginate]
  )

  useEffect(() => {
    const timing = autoplay
      ? setInterval(() => {
          paginate(CAROUSEL_SLIDE_DIRECTION.RIGHT)
        }, AUTOPLAY_TIMING)
      : undefined

    return () => {
      clearInterval(timing)
    }
  }, [autoplay, paginate])
  const handleStartTouch = (event: GestureResponderEvent) => {
    const { pageX } = event.nativeEvent.changedTouches[0]

    setCoordinate(pageX)
  }
  const handleFinishTouch = (event: GestureResponderEvent) => {
    const { pageX } = event.nativeEvent.changedTouches[0]

    paginate(
      coordinate - pageX > 0 ? CAROUSEL_SLIDE_DIRECTION.RIGHT : CAROUSEL_SLIDE_DIRECTION.LEFT
    )
  }

  return (
    <YStack gap={20} justifyContent="center" alignItems="center" overflow="hidden" {...rest}>
      <XStack height={height} width={width} backgroundColor="$gray_50">
        <XStack fullscreen>
          <AnimatePresence initial={false} custom={{ going }}>
            <GalleryImage
              key={page}
              animation="slow"
              going={going}
              onTouchStart={handleStartTouch}
              onTouchEnd={handleFinishTouch}
            >
              <Image
                flex={1}
                resizeMode="contain"
                alignSelf="stretch"
                source={{
                  uri: data[imageIndex],
                }}
              />
            </GalleryImage>
          </AnimatePresence>
        </XStack>
      </XStack>
      <XStack gap={4}>{renderDots}</XStack>
    </YStack>
  )
}

export default Carousel
