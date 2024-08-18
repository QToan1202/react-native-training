import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, GetProps, Image, XStack, YStack, styled } from 'tamagui'
import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons'

import { IconButton } from '../Button'

const AUTOPLAY_TIMING = 2 // seconds
const CAROUSEL_SLIDE_DIRECTION = {
  RIGHT: 1,
  LEFT: -1,
  STAY: 0,
}

const GalleryItem = styled(YStack, {
  zIndex: 1,
  x: 0,
  opacity: 1,
  fullscreen: true,

  variants: {
    going: {
      ':number': (going) => ({
        enterStyle: {
          x: going > CAROUSEL_SLIDE_DIRECTION.STAY ? 1000 : -1000,
          opacity: 0,
        },
        exitStyle: {
          zIndex: 0,
          x: going < CAROUSEL_SLIDE_DIRECTION.STAY ? 1000 : -1000,
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

export type CarouselProps<T> = GetProps<typeof GalleryItem> & {
  data: T[]
  autoplay?: boolean
}

const Carousel = <T,>({
  data,
  autoplay = false,
  width = '100%',
  height = 300,
  ...rest
}: CarouselProps<T>) => {
  const [[page, going], setPage] = useState([0, 0])
  const paginate = useCallback((going: number) => {
    setPage(([previousPage, _]) => [previousPage + going, going])
  }, [])
  const getImgPath = (item: unknown) => {
    if (typeof item === 'string') return item
    if (item instanceof Object && 'src' in item) return item?.src as string

    // TODO: Refactor with placeholder image path
    return ''
  }

  useEffect(() => {
    const timing = autoplay
      ? setInterval(() => {
          paginate(CAROUSEL_SLIDE_DIRECTION.RIGHT)
        }, AUTOPLAY_TIMING * 1000)
      : undefined

    return () => {
      clearInterval(timing)
    }
  }, [autoplay, paginate])

  return (
    <XStack
      backgroundColor="$gray_50"
      position="relative"
      height={height}
      width={width}
      overflow="hidden"
      alignItems="center"
    >
      <AnimatePresence initial={false} custom={{ going }}>
        <GalleryItem key={page} animation="slow" going={going} {...rest}>
          <Image
            flex={1}
            source={{
              uri: getImgPath(data[wrap(0, data.length, page)]),
            }}
          />
        </GalleryItem>
      </AnimatePresence>
      <IconButton
        aria-label="Carousel left"
        position="absolute"
        left="$4"
        zi={100}
        onPress={() => paginate(CAROUSEL_SLIDE_DIRECTION.LEFT)}
      >
        <ChevronLeft color="$pure_black" size="$2" />
      </IconButton>
      <IconButton
        aria-label="Carousel right"
        position="absolute"
        right="$4"
        zi={100}
        onPress={() => paginate(CAROUSEL_SLIDE_DIRECTION.RIGHT)}
      >
        <ChevronRight color="$pure_black" size="$2" />
      </IconButton>
    </XStack>
  )
}

export default Carousel
