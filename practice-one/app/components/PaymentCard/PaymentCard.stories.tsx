import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { PaymentCard } from '../index'

export default {
  title: 'Payment Card',
  component: PaymentCard,
} as ComponentMeta<typeof PaymentCard>

const Template: ComponentStory<typeof PaymentCard> = (args) => <PaymentCard {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Tradly Team',
  cardNumber: '5627215898548869',
  cvc: 111,
  expires: '01/2019',
}

export const VisaCard = Template.bind({})
VisaCard.args = {
  name: 'Toan Nguyen',
  cardNumber: '4444444444444444',
  cvc: 312,
  expires: '12/2027',
}
