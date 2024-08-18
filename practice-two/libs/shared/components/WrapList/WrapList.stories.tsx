import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { renderItem } from '../../utils'

import { WrapList, ProductCard } from '../index'

export default {
  title: 'components/Wrap List',
  component: WrapList,
} as ComponentMeta<typeof WrapList>

const Template: ComponentStory<typeof WrapList> = (args) => <WrapList {...args} />

const PRODUCT_DATA = [
  {
    id: '1',
    img: require('@assets/product/coca.png'),
    title: 'coca cola',
    avatar: require('@assets/avatar.png'),
    storeName: 'tradly',
    price: 222.6,
  },
  {
    id: '2',
    img: require('@assets/product/coca.png'),
    title: 'coca cola',
    avatar: require('@assets/avatar.png'),
    storeName: 'tradly',
    price: 222.6,
  },
]

export const Default = Template.bind({})
Default.args = {
  data: PRODUCT_DATA,
  keyExtractor: ({ id }) => id,
  renderItem: renderItem(ProductCard),
  numColumns: 2,
  showsHorizontalScrollIndicator: false,
}
