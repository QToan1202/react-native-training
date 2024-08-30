import { GetProps, styled } from 'tamagui'
import { ReactNode, useMemo, useState } from 'react'
import { Swiper as BaseSwiper, SwiperSlide as BaseSwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

import { getValidChildren } from '../../utils'

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
type CarouselProps = SwiperProps & {
  children: ReactNode
  isShowNavigation?: boolean
  isShowIndex?: boolean
}

const Carousel = ({
  children,
  isShowNavigation = false,
  isShowIndex = true,
  ...rest
}: CarouselProps) => {
  const [childrenArr] = useState(() =>
    getValidChildren(children).map((child, index) => (
      <SwiperSlide slot="wrapper-start" key={index}>
        {child}
      </SwiperSlide>
    ))
  )
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
    <Swiper slidesPerView={2} {...transformProps} {...rest}>
      {childrenArr}
    </Swiper>
  )
}

export default Carousel
