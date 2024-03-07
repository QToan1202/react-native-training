import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import SignUp from './index'

export default {
  title: 'screens/SignUp',
  component: SignUp,
} as ComponentMeta<typeof SignUp>

const Template: ComponentStory<typeof SignUp> = () => <SignUp />

export const Default = Template.bind({})
Default.args = {}
