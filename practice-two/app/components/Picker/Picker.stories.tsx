import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Picker } from '../index'

export default {
  title: 'components/Picker',
  component: Picker,
} as ComponentMeta<typeof Picker>

const Template: ComponentStory<typeof Picker> = (args) => <Picker {...args} />

export const Default = Template.bind({})
Default.args = {
  listData: [
    {
      id: 'vn',
      name: 'vietnam',
      value: '+91',
    },
    {
      id: 'vn1',
      name: 'vietnam',
      value: '+92',
    },
    {
      id: 'vn2',
      name: 'vietnam',
      value: '+93',
    },
    {
      id: 'vn3',
      name: 'vietnam',
      value: '+94',
    },
    {
      id: 'vn4',
      name: 'vietnam',
      value: '+95',
    },
  ],
}
