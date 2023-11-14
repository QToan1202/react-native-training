import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { AddAddress } from '../index'

export default {
  title: 'screens/Checkout/Add Address',
  component: AddAddress,
} as ComponentMeta<typeof AddAddress>

const Template: ComponentStory<typeof AddAddress> = () => <AddAddress />

export const Default = Template.bind({})
Default.args = {}
