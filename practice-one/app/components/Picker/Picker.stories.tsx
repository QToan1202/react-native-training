import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Picker } from '../index'
import PickerItem from './PickerItem'

export default {
  title: 'Picker',
  component: Picker,
} as ComponentMeta<typeof Picker>

const children = <PickerItem label="Java" value="java" />

const Template: ComponentStory<typeof Picker> = (args) => <Picker {...args}>{children}</Picker>

export const Default = Template.bind({})
Default.args = {
  selectedValue: 'java',
}
