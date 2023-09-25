import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { Button } from '../index'

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'My Button',
  onPress: action('press'),
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  ...Default.args,
  variant: 'secondary',
}

export const OutlineButton = Template.bind({})
OutlineButton.args = {
  ...Default.args,
  variant: 'tertiary',
}

export const FullButtonWithoutRadius = Template.bind({})
FullButtonWithoutRadius.args = {
  ...Default.args,
  variant: 'quaternary',
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  ...Default.args,
  shrink: true,
}

export const ButtonWithLeftIcon = Template.bind({})
ButtonWithLeftIcon.args = {
  ...Default.args,
  leftIcon: require('@assets/icon.png'),
  variant: 'secondary',
  title: 'My Icon Button',
}

export const ButtonWithRightIcon = Template.bind({})
ButtonWithRightIcon.args = {
  ...Default.args,
  rightIcon: require('@assets/favicon.png'),
  title: 'My Icon Button',
}
