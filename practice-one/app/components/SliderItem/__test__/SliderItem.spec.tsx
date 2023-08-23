import { render, fireEvent, screen } from '@testing-library/react-native'

import SliderItem from '../index'

const mockOnPress = jest.fn()

describe('Testing Slider Item component', () => {
  beforeEach(() => {
    render(
      <SliderItem
        source={require('@assets/slider/deliver.png')}
        title="my item"
        btnTitle="buy"
        onPress={mockOnPress}
        testID="slide-item"
      />
    )
  })

  it('Render Slider Item component success', () => {
    const component = render(
      <SliderItem
        source={require('@assets/slider/deliver.png')}
        title="my item"
        btnTitle="buy"
        onPress={mockOnPress}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Slider Item must have Title and Button component', () => {
    const titleElement = screen.getByText('my item')
    const buttonElement = screen.getByText('buy')

    expect(titleElement).toBeOnTheScreen()
    expect(buttonElement).toBeOnTheScreen()
  })

  it('Slider button can react to user action', () => {
    const buttonElement = screen.getByText('buy')

    fireEvent.press(buttonElement)
    expect(mockOnPress).toBeCalledTimes(1)
  })
})
