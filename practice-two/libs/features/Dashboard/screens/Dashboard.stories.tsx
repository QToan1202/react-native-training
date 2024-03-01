import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import Dashboard from './index'

export default {
  title: 'screens/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>

const Template: ComponentStory<typeof Dashboard> = () => <Dashboard />

export const Default = Template.bind({})
Default.args = {}
