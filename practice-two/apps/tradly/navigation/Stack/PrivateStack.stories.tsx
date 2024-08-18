import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'

import Stack from './index'

export default {
  title: 'navigation/Private Stack Navigation',
  component: Stack.PrivateStackNavigator,
  decorators: [
    (Story) => (
      <NavigationContainer>
        <Story />
      </NavigationContainer>
    ),
  ],
} as ComponentMeta<typeof Stack.PrivateStackNavigator>

const Template: ComponentStory<typeof Stack.PrivateStackNavigator> = () => (
  <Stack.PrivateStackNavigator />
)

export const Default = Template.bind({})
Default.args = {}
