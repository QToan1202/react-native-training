import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { ProductCard } from '../index'

export default {
  title: 'components/Product Card',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />

export const Default = Template.bind({})
Default.args = {
  img: require('@assets/product/coca.png'),
  title: 'coca cola',
  avatar: require('@assets/avatar.png'),
  storeName: 'tradly',
  price: 222.6,
  onPress: action('card-press'),
}

export const ProductCardWithDiscount = Template.bind({})
ProductCardWithDiscount.args = {
  ...Default.args,
  img: require('@assets/store/tradly.png'),
  discountPrice: 1000,
}
