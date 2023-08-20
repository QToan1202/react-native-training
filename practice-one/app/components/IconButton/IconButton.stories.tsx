import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { IconButton } from '../index'

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: require('@assets/favicon.png'),
  accessibilityLabel: 'like button',
  onPress: action('Pressing'),
}

export const ButtonWithoutBg = Template.bind({})
ButtonWithoutBg.args = {
  icon: require('@assets/favicon.png'),
  noBackground: true,
  onPress: action('Pressing'),
}
