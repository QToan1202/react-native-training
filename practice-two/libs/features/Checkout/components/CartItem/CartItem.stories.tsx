import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { CartItem } from '../index'

export default {
  title: 'components/Cart Item',
  component: CartItem,
} as ComponentMeta<typeof CartItem>

const Template: ComponentStory<typeof CartItem> = (args) => <CartItem {...args} />

export const Default = Template.bind({})
Default.args = {
  image: require('@assets/cart/item.png'),
  name: 'coca cola',
  price: 50,
  quantity: 1,
}

export const Item = Template.bind({})
Item.args = {
  image: require('@assets/store/tradly.png'),
  name: 'vegetables',
  price: 100,
  discountPrice: 2,
  quantity: 1,
}
