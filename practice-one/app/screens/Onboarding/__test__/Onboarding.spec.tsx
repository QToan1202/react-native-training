import { fireEvent, render, screen } from '@testing-library/react-native'

import Onboarding from '../index'

describe('Testing onboarding screen', () => {
  beforeEach(() => {
    render(<Onboarding testID="viewpager" />)
  })

  it('Render screen successfully', () => {
    const component = render(<Onboarding />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Next button change to finish button at the end of view pager', async () => {
    const button = screen.getByText(/next/)

    fireEvent.press(button)
    fireEvent.press(button)

    const finishBtn = await screen.findByText(/finish/)
    expect(finishBtn).toBeOnTheScreen()

    fireEvent.press(finishBtn)
    expect(finishBtn).toBeOnTheScreen()
  })
})
