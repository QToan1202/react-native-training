import { render } from '@testing-library/react-native'

import OrderDetail from '../index'

describe('Testing Order Detail screen', () => {
  it('Render screen successfully', () => {
    const component = render(<OrderDetail />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
