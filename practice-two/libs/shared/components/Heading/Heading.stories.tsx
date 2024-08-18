import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Heading } from '../index'

export default {
  title: 'components/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  content: 'My default heading',
}

export const MediumHeading = Template.bind({})
MediumHeading.args = {
  content: 'My medium heading',
  fontWeight: '$2',
}

export const HeadingWithCustomStyle = Template.bind({})
HeadingWithCustomStyle.args = {
  content: 'My custom heading',
  fontWeight: '$2',
  color: '#000',
}
