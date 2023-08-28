import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { TrackerItem } from '../index'

export default {
  title: 'Tracker Item',
  component: TrackerItem,
} as ComponentMeta<typeof TrackerItem>

const Template: ComponentStory<typeof TrackerItem> = (args) => <TrackerItem {...args} />

export const Default = Template.bind({})
Default.args = {
  trackStatus: 'order placed',
  description: 'Order#123455 from Fashion Point',
  date: new Date(),
  time: '11:30 AM',
}
