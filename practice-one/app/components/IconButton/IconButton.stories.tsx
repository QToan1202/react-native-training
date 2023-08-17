import { Alert, Image } from 'react-native'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { IconButton } from '../index'

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

const Icon = (
  <Image
    source={require('@assets/favicon.png')}
    fadeDuration={0}
    style={{ width: 24, height: 24 }}
  />
)

export const Default = Template.bind({})
Default.args = {
  children: Icon,
  accessibilityLabel: 'like button',
  onPress: () => Alert.alert('Pressing'),
}

export const ButtonWithoutBg = Template.bind({})
ButtonWithoutBg.args = {
  children: Icon,
  noBackground: true,
  onPress: () => Alert.alert('Pressing'),
}
