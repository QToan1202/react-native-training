import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Text } from '../index'

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  content: 'My text',
}

export const TextWithSize = Template.bind({})
TextWithSize.args = {
  content: 'My bigger text',
  size: 'lg',
}

export const TextWithCustomStyle = Template.bind({})
TextWithCustomStyle.args = {
  content: 'My text is colorful',
  style: {
    color: 'aqua',
  },
}
