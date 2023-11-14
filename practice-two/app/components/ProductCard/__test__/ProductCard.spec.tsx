import { render, fireEvent, screen } from '@testing-library/react-native'
import ProductCard from '../index'

const mockOnPress = jest.fn()

describe('Testing product card component', () => {
  beforeEach(() => {
    render(
      <ProductCard
        img={require('@assets/product/coca.png')}
        title="coca cola"
        avatar={require('@assets/avatar.png')}
        storeName="tradly"
        price={222.6}
        discountPrice={200}
        onPress={mockOnPress}
        testID="product-card"
      />
    )
  })

  it('Card component render success', () => {
    const component = render(
      <ProductCard
        img={require('@assets/product/coca.png')}
        title="coca cola"
        avatar={require('@assets/avatar.png')}
        storeName="tradly"
        price={222.6}
        onPress={mockOnPress}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Card component can fire action when press', () => {
    const component = screen.getByTestId('product-card')

    fireEvent.press(component)
    expect(mockOnPress).toBeCalledTimes(1)
  })
})
