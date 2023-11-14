import { render } from '@testing-library/react-native'

import Cart from '../index'

describe('Testing Cart screen', () => {
  it('Render screen successfully', () => {
    const component = render(<Cart />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
