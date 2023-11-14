import { render, screen } from '@testing-library/react-native'

import { CHECKOUT } from '@constants'

import Price from '../index'

describe('Testing Price component', () => {
  beforeEach(() => {
    render(
      <Price
        data={CHECKOUT.PRICE_DETAILS}
        header="price details"
        footer="totals"
        total={25}
        testID="price-details"
      />
    )
  })

  it('Render component successfully', () => {
    const component = render(
      <Price data={CHECKOUT.PRICE_DETAILS} header="price details" footer="totals" total={25} />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Component must have right header and footer title', () => {
    const header = screen.getByText(/price details/)
    const footer = screen.getByText(/totals/)

    expect(header).toBeOnTheScreen()
    expect(footer).toBeOnTheScreen()
  })
})
