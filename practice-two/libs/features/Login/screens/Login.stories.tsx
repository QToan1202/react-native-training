import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import Login from './index'

export default {
  title: 'screens/Login',
  component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = () => <Login />

export const Default = Template.bind({})
Default.args = {}
