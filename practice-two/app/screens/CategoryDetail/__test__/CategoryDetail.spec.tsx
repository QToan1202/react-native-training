import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'

import { RootStackParamList } from '@navigation/Stack'
import { render } from 'test-utils'

import CategoryDetail from '../index'

const navigation = {
  setOptions: () => ({
    headTitle: 'mock header',
  }),
} as unknown as NativeStackNavigationProp<RootStackParamList, 'CategoryDetail'>

const route = {
  name: 'CategoryDetail',
  params: { id: '1', name: 'header name' },
} as unknown as RouteProp<RootStackParamList, 'CategoryDetail'>

describe('Testing Category Detail screen', () => {
  it('Render screen successfully', () => {
    const component = render(<CategoryDetail route={route} navigation={navigation} />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
