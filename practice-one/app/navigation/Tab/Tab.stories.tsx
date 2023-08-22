import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'

import BottomNav from './index'

export default {
  title: 'navigation/Bottom Tab Navigation',
  component: BottomNav,
} as ComponentMeta<typeof BottomNav>

const Template: ComponentStory<typeof BottomNav> = () => (
  <NavigationContainer>
    <BottomNav />
  </NavigationContainer>
)

export const Default = Template.bind({})
Default.args = {}
