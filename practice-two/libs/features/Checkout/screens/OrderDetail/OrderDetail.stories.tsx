import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { OrderDetail } from '../index'

export default {
  title: 'screens/Checkout/Order Detail',
  component: OrderDetail,
} as ComponentMeta<typeof OrderDetail>

const Template: ComponentStory<typeof OrderDetail> = () => <OrderDetail />

export const Default = Template.bind({})
Default.args = {}
