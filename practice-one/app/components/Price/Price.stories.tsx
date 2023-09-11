import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Price } from '../index'

export default {
  title: 'Price',
  component: Price,
} as ComponentMeta<typeof Price>

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />

export const Default = Template.bind({})
Default.args = {
  data: [
    { id: 1, label: 'price (1 item)', value: '$25' },
    { id: 2, label: 'delivery fee', value: 'info' },
  ],
  total: 25,
}
