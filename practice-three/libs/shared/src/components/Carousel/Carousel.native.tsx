import { default as RNCarousel, TCarouselProps } from 'react-native-reanimated-carousel'

export type CarouselProps<T> = TCarouselProps<T>

const Carousel = <T,>({ ...props }: CarouselProps<T>) => {
  return <RNCarousel {...props} />
}

export default Carousel
