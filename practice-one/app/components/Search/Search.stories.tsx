import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Search } from '../index'

export default {
  title: 'Search',
  component: Search,
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search Product',
}
