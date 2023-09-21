import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { NavigationDecorator } from '@utils/StoryNavigator'

import { CategoryDetail } from '../index'

export default {
  title: 'screens/Category Detail',
  component: CategoryDetail,
  decorators: [NavigationDecorator],
} as ComponentMeta<typeof CategoryDetail>

const Template: ComponentStory<typeof CategoryDetail> = (args) => <CategoryDetail {...args} />
export const Default = Template.bind({})
