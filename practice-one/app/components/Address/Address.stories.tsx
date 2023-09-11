import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { Address } from '../index'

export default {
  title: 'Address',
  component: Address,
} as ComponentMeta<typeof Address>

const Template: ComponentStory<typeof Address> = (args) => <Address {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Deliver to Tradly Team, 75119',
  streetAddress: 'Kualalumpur, Malaysia',
  onPress: action('change address'),
}
