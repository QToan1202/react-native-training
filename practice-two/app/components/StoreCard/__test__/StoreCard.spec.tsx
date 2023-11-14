import { render, fireEvent, screen } from '@testing-library/react-native'

import { containerStyles } from '@styles'

import StoreCard from '../index'

const mockOnPress = jest.fn()

describe('Testing store card component', () => {
  beforeEach(() => {
    render(
      <StoreCard
        image={require('@assets/store/tradly.png')}
        btnTitle="follow"
        name="store"
        source={require('@assets/avatar.png')}
        onPressBtn={mockOnPress}
        testID="card"
      />
    )
  })

  it('Render card component success', () => {
    const component = render(
      <StoreCard
        image={require('@assets/store/tradly.png')}
        btnTitle="follow"
        name="store"
        source={require('@assets/avatar.png')}
        onPressBtn={mockOnPress}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('When render success the card must show on the screen', () => {
    const component = screen.getByTestId('card')

    expect(component).toBeTruthy()
    expect(component).toBeOnTheScreen()
  })

  it('Card component must exist default styles', () => {
    const component = screen.getByTestId('card')

    expect(component).toHaveStyle(containerStyles.card)
  })

  it('Button will fire event when press', () => {
    const button = screen.getByText('follow')

    fireEvent.press(button)
    expect(mockOnPress).toBeCalledTimes(1)
  })
})
