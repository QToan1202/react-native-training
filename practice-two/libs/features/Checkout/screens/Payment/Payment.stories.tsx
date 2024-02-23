import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Payment } from '../index'

export default {
  title: 'screens/Checkout/Payment',
  component: Payment,
} as ComponentMeta<typeof Payment>

const Template: ComponentStory<typeof Payment> = () => <Payment />

export const Default = Template.bind({})
Default.args = {}
