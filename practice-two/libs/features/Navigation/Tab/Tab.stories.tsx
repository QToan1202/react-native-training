import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'

import BottomNav from './index'

export default {
  title: 'navigation/Bottom Tab Navigation',
  component: BottomNav,
  decorators: [
    (Story) => (
      <NavigationContainer>
        <Story />
      </NavigationContainer>
    ),
  ],
} as ComponentMeta<typeof BottomNav>

const Template: ComponentStory<typeof BottomNav> = () => <BottomNav />

export const Default = Template.bind({})
Default.args = {}
