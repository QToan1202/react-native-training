import { render, screen } from '@testing-library/react-native'

import { COLORS } from '@constants'

import CartItem from '../index'

describe('Testing Cart item component', () => {
  beforeEach(() => {
    render(
      <CartItem
        image={require('@assets/cart/item.png')}
        name="coca cola"
        price={50}
        quantity={1}
        testID="cart-item"
      />
    )
  })

  it('Render Cart item successfully', () => {
    const component = render(
      <CartItem
        image={require('@assets/cart/item.png')}
        name="coca cola"
        price={50}
        discountPrice={25}
        quantity={1}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Item must exist on the screen', () => {
    const component = screen.getByTestId('cart-item')

    expect(component).toBeOnTheScreen()
    expect(component).toBeVisible()
  })

  it('Item price must have the primary color', () => {
    const component = screen.getByText(/50/)

    expect(component).toHaveStyle({ color: COLORS.PRIMARY })
  })
})
