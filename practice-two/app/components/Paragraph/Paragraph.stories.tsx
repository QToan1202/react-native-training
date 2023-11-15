import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Paragraph } from '../index'

export default {
  title: 'components/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />

export const Default = Template.bind({})
Default.args = {
  content: 'My text',
}

export const TextWithSize = Template.bind({})
TextWithSize.args = {
  content: 'My bigger text',
  size: '$2',
}

export const TextWithCustomStyle = Template.bind({})
TextWithCustomStyle.args = {
  content: 'My text is colorful',
  color: 'aqua',
}
