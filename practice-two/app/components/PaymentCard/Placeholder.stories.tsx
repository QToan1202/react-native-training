import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { PaymentCardPlaceholder } from '../index'

export default {
  title: 'components/Payment Card Place Holder',
  component: PaymentCardPlaceholder,
} as ComponentMeta<typeof PaymentCardPlaceholder>

const Template: ComponentStory<typeof PaymentCardPlaceholder> = () => <PaymentCardPlaceholder />

export const Default = Template.bind({})
Default.args = {}
