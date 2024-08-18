import { render } from '@testing-library/react-native'

import AddAddress from '../index'

describe('Testing Add Address screen', () => {
  it('Render screen successfully', () => {
    const component = render(<AddAddress />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
