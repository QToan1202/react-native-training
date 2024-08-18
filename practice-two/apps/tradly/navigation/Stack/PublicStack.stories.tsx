import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'

import Stack from './index'

export default {
  title: 'navigation/Public Stack Navigation',
  component: Stack.PublicStackNavigator,
  decorators: [
    (Story) => (
      <NavigationContainer>
        <Story />
      </NavigationContainer>
    ),
  ],
} as ComponentMeta<typeof Stack.PublicStackNavigator>

const Template: ComponentStory<typeof Stack.PublicStackNavigator> = () => (
  <Stack.PublicStackNavigator />
)

export const Default = Template.bind({})
Default.args = {}
