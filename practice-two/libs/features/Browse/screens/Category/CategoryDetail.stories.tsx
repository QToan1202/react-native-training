import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { NavigationDecorator } from '@practice-two/shared'
import { RootStackParamList } from 'libs/shared/navigation/Stack'

import CategoryDetail from './index'

export default {
  title: 'screens/Category Detail',
  component: CategoryDetail,
  decorators: [NavigationDecorator],
} as ComponentMeta<typeof CategoryDetail>

const navigation = {
  setOptions: () => ({
    headTitle: 'mock header',
  }),
} as unknown as NativeStackNavigationProp<RootStackParamList, 'CategoryDetail'>

const route = {
  name: 'CategoryDetail',
  params: { id: '1', name: 'header name' },
} as unknown as RouteProp<RootStackParamList, 'CategoryDetail'>

const Template: ComponentStory<typeof CategoryDetail> = (args) => <CategoryDetail {...args} />
export const Default = Template.bind({})
Default.args = {
  navigation,
  route,
}
