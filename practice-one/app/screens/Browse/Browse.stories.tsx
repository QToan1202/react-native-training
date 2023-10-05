import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Browse } from '../index'

export default {
  title: 'screens/Browse',
  component: Browse,
} as ComponentMeta<typeof Browse>

const Template: ComponentStory<typeof Browse> = () => <Browse />
export const Default = Template.bind({})
Default.args = {}
