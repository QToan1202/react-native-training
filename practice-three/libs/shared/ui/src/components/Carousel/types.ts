import { ReactElement } from 'react'

export type CarouselRenderItemProps<T> = {
  item: T
  index: number
}

type CarouselRenderItem<Item> = (props: CarouselRenderItemProps<Item>) => ReactElement

export type BaseCarouselProps<T> = {
  data: T[]
  renderItem: CarouselRenderItem<T>
  isShowNavigation?: boolean
  isShowIndex?: boolean
}
