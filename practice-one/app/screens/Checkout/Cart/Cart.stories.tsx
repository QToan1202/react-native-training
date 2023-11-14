import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Cart } from '../index'

export default {
  title: 'screens/Checkout/Cart',
  component: Cart,
} as ComponentMeta<typeof Cart>

const Template: ComponentStory<typeof Cart> = () => <Cart />

export const Default = Template.bind({})
Default.args = {}
