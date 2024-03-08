import { render, fireEvent, screen } from '@testing-library/react-native'
import MenuCard from '../index'

const mockOnPress = jest.fn()

describe('Testing menu card component', () => {
  beforeEach(() => {
    render(
      <MenuCard
        name="beverages"
        source={require('@assets/menu/beverages.png')}
        onPress={mockOnPress}
        testID="menu-card"
      />
    )
  })

  it('Render menu card success', () => {
    const component = render(
      <MenuCard
        name="beverages"
        source={require('@assets/menu/beverages.png')}
        onPress={mockOnPress}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Component must exist on component tree', () => {
    const component = screen.getByTestId('menu-card')

    expect(component).toBeOnTheScreen()
  })

  it('When press on card fire an event', () => {
    const parentComponent = screen.getByTestId('menu-card').parent

    expect(parentComponent).toBeTruthy()
    if (parentComponent) fireEvent.press(parentComponent)
    expect(mockOnPress).toBeCalledTimes(1)
  })
})
