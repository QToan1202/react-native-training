import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { PAYMENT_METHODS } from '@practice-two/shared'

import { Radio } from '../index'

export default {
  title: 'components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Default = Template.bind({})
Default.args = {
  radioList: PAYMENT_METHODS,
}
