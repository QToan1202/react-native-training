import { IFlatListBase } from '@types'

import { SliderItemProps } from '@components/SliderItem'

export interface ISliderItem extends IFlatListBase, Omit<SliderItemProps, 'id'> {}

const SLIDER_DATA: ISliderItem[] = [
  {
    id: '1',
    title: 'Ready to deliver to your home',
    btnTitle: 'Start Shopping',
    source: require('@assets/slider/deliver.png'),
    onPress: () => undefined,
  },
  {
    id: '2',
    title: 'Ready to deliver to your home',
    btnTitle: 'Start Shopping',
    source: require('@assets/slider/deliver.png'),
    onPress: () => undefined,
  },
]

export default SLIDER_DATA
