import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Button } from '../index'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'My Button',
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  title: 'My Button',
  variant: 'secondary',
}

export const OutlineButton = Template.bind({})
OutlineButton.args = {
  title: 'My Button',
  variant: 'tertiary',
}

export const FullButtonWithOutRadius = Template.bind({})
FullButtonWithOutRadius.args = {
  title: 'My Button',
  variant: 'quaternary',
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  title: 'My Button',
  shrink: true,
}
