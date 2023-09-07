import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { CategoryDetail } from '../index'

export default {
  title: 'screens/Category Detail',
  component: CategoryDetail,
} as ComponentMeta<typeof CategoryDetail>

const Template: ComponentStory<typeof CategoryDetail> = () => <CategoryDetail />

export const Default = Template.bind({})
Default.args = {}
