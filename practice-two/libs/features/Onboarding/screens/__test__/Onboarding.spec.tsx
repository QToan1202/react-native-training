import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { fireEvent, screen } from '@testing-library/react-native'
import { RouteProp } from '@react-navigation/native'

import { render } from 'test-utils'
import { RootStackParamList } from '@navigation/Stack'

import Onboarding from '../index'

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
} as unknown as NativeStackNavigationProp<RootStackParamList, 'Onboarding'>

const route = {
  name: 'Onboarding',
} as unknown as RouteProp<RootStackParamList, 'Onboarding'>

describe('Testing onboarding screen', () => {
  beforeEach(() => {
    render(<Onboarding navigation={navigation} route={route} testID="viewpager" />)
  })

  it('Render screen successfully', () => {
    const component = render(<Onboarding navigation={navigation} route={route} />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Next button change to finish button at the end of view pager', async () => {
    const button = screen.getByText(/next/)

    fireEvent.press(button)
    fireEvent.press(button)

    const finishBtn = await screen.findByText(/finish/)
    expect(finishBtn).toBeOnTheScreen()

    fireEvent.press(finishBtn)
    expect(navigation.navigate).toBeCalledTimes(1)
  })
})
