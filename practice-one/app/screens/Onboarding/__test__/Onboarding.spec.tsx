import { fireEvent, screen } from '@testing-library/react-native'
import { render } from 'test-utils'

import Onboarding from '../index'

const props = {
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
}

describe('Testing onboarding screen', () => {
  beforeEach(() => {
    render(<Onboarding {...props} testID="viewpager" />)
  })

  it('Render screen successfully', () => {
    const component = render(<Onboarding {...props} />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Next button change to finish button at the end of view pager', async () => {
    const button = screen.getByText(/next/)

    fireEvent.press(button)
    fireEvent.press(button)

    const finishBtn = await screen.findByText(/finish/)
    expect(finishBtn).toBeOnTheScreen()

    fireEvent.press(finishBtn)
    expect(props.navigation.navigate).toBeCalledTimes(1)
  })
})
