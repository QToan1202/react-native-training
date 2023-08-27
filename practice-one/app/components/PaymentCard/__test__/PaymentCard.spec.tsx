import { render, screen } from '@testing-library/react-native'

import PaymentCard from '../index'

describe('Testing Payment Card component', () => {
  beforeEach(() => {
    render(
      <PaymentCard
        name="card"
        cardNumber="5627215898548869"
        cvc={123}
        expires="01/2019"
        isSelected
        testID="payment-card"
      />
    )
  })

  it('Render Payment Card component success', () => {
    const component = render(
      <PaymentCard
        name="card"
        cardNumber="5627215898548869"
        cvc={123}
        expires="01/2019"
        isSelected
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('When render success component must exist on component tree', () => {
    const element = screen.getByTestId('payment-card')

    expect(element).toBeOnTheScreen()
  })

  it('Component must have source prop', () => {
    const element = screen.getByTestId('payment-card')

    expect(element).toHaveProp('source')
  })
})
