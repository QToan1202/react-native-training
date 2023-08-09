import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Heading } from '../index'

export default {
  title: 'Heading',
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
  textMedium: true,
}

export const HeadingWithCustomStyle = Template.bind({})
MediumHeading.args = {
  content: 'My custom heading',
  textMedium: true,
  style: {
    color: '#000',
  },
}
