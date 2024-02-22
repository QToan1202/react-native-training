import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Avatar } from '../index'

export default {
  title: 'components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  source: require('@assets/avatar.png'),
  name: 'avatar',
}

export const AvatarWithDiffSize = Template.bind({})
AvatarWithDiffSize.args = {
  ...Default.args,
  size: 'md',
}

export const AvatarFullOtp = Template.bind({})
AvatarFullOtp.args = {
  ...Default.args,
  size: 'xl',
  inline: true,
}
