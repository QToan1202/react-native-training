import { fireEvent, render, screen } from '@testing-library/react-native'

import Address from '../index'

const mockOnPress = jest.fn()

describe('Testing Address component', () => {
  beforeEach(() => {
    render(
      <Address
        name="Deliver to Tradly Team, 75119"
        streetAddress="Kualalumpur, Malaysia"
        onPress={mockOnPress}
        testID="address-info"
      />
    )
  })

  it('Render component successfully', () => {
    const component = render(
      <Address
        name="Deliver to Tradly Team, 75119"
        streetAddress="Kualalumpur, Malaysia"
        onPress={mockOnPress}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Component must have the right content', () => {
    const heading = screen.getByText('Deliver to Tradly Team, 75119')
    const street = screen.getByText('Kualalumpur, Malaysia')

    expect(heading).toBeOnTheScreen()
    expect(street).toBeOnTheScreen()
  })

  it('Component button must fire an action when press', () => {
    const button = screen.getByText(/change/)

    fireEvent.press(button)
    expect(mockOnPress).toBeCalledTimes(1)
  })
})
