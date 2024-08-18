import { fireEvent, render, screen } from '@testing-library/react-native'

import { PAYMENT_METHODS } from '@constants'

import Radio from '../index'
import styles from '../styles'

describe('Testing Radio component', () => {
  beforeEach(() => {
    render(<Radio radioList={PAYMENT_METHODS} testID="radio-item" />)
  })

  it('Render Radio component success', () => {
    const component = render(<Radio radioList={PAYMENT_METHODS} />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Radio title will not change style when press item', () => {
    const component = screen.getByText('Wallet')

    fireEvent.press(component)
    expect(component).toHaveStyle(styles.title)
  })
})
