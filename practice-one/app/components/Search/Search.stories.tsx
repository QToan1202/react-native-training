import { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Search } from '../index'
import { SearchProps } from './index'

export default {
  title: 'Search',
  component: Search,
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (
  args: Omit<SearchProps, 'value' | 'onChangeText'>
) => {
  const [value, onChangeValue] = useState<string>('')

  return <Search value={value} onChangeText={onChangeValue} {...args} />
}

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search Product',
}
