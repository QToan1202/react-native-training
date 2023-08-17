import { Image } from 'react-native'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Button } from '../index'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

const LeftIcon = (
  <Image
    // eslint-disable-next-line global-require
    source={require('@assets/icon.png')}
    fadeDuration={0}
    style={{ width: 24, height: 24 }}
  />
)

const RightIcon = (
  <Image
    // eslint-disable-next-line global-require
    source={require('@assets/favicon.png')}
    fadeDuration={0}
    style={{ width: 24, height: 24 }}
  />
)

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

export const FullButtonWithoutRadius = Template.bind({})
FullButtonWithoutRadius.args = {
  title: 'My Button',
  variant: 'quaternary',
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  title: 'My Button',
  shrink: true,
}

export const ButtonWithLeftIcon = Template.bind({})
ButtonWithLeftIcon.args = {
  leftIcon: LeftIcon,
  variant: 'secondary',
  title: 'My Icon Button',
}

export const ButtonWithRightIcon = Template.bind({})
ButtonWithRightIcon.args = {
  rightIcon: RightIcon,
  title: 'My Icon Button',
}
