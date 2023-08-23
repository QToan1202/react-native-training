import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { SliderItem } from '../index'

export default {
  title: 'Slider Item',
  component: SliderItem,
} as ComponentMeta<typeof SliderItem>

const Template: ComponentStory<typeof SliderItem> = (args) => <SliderItem {...args} />

export const Default = Template.bind({})
Default.args = {
  source: require('@assets/slider/deliver.png'),
  title: 'Ready to deliver to your home',
  btnTitle: 'Start Shopping',
  onPress: action('press'),
}
