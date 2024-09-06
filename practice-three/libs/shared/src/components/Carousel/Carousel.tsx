import { GetProps, styled } from 'tamagui'
import { useMemo } from 'react'
import { Swiper as BaseSwiper, SwiperSlide as BaseSwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'
import { BaseCarouselProps } from './types'

const Swiper = styled(BaseSwiper, {
  acceptsClassName: true,
  width: '100%',
  height: '100%',
})

const SwiperSlide = styled(BaseSwiperSlide, {
  acceptsClassName: true,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$pure_white',
  paddingBottom: 40,
})

type SwiperProps = GetProps<typeof Swiper>
export type CarouselProps<T> = SwiperProps & BaseCarouselProps<T>

const Carousel = <T,>({
  data,
  isShowNavigation = false,
  isShowIndex = true,
  renderItem,
  ...rest
}: CarouselProps<T>) => {
  const renderItemWithLayout = useMemo(() => {
    return data.map((item, index) => (
      <SwiperSlide slot="wrapper-start" key={index}>
        {renderItem({ item, index })}
      </SwiperSlide>
    ))
  }, [data, renderItem])

  const transformProps = useMemo((): SwiperProps => {
    const baseProps: Omit<SwiperProps, 'modules'> = { freeMode: true }
    const modules: SwiperProps['modules'] = [FreeMode]

    if (isShowIndex) {
      baseProps.pagination = {
        enabled: true,
        clickable: true,
      }
      modules.push(Pagination)
    }

    if (isShowNavigation) {
      baseProps.navigation = true
      modules.push(Navigation)
    }

    return { ...baseProps, modules }
  }, [isShowIndex, isShowNavigation])

  return (
    <Swiper slidesPerView={1} {...transformProps} {...rest}>
      {renderItemWithLayout}
    </Swiper>
  )
}

export default Carousel
