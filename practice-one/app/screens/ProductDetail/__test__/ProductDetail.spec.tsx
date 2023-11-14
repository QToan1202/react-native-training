import { render } from '@testing-library/react-native'

import ProductDetail from '../index'

describe('Testing Product Detail screen', () => {
  it('Render screen successfully', () => {
    const component = render(<ProductDetail />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
