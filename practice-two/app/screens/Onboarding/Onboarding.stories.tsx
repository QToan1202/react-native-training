import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Onboarding } from '../index'

export default {
  title: 'screens/Onboarding',
  component: Onboarding,
} as ComponentMeta<typeof Onboarding>

const Template: ComponentStory<typeof Onboarding> = (args) => <Onboarding {...args} />

export const Default = Template.bind({})
Default.args = {}
