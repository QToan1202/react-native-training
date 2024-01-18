import { render } from 'test-utils'

import Wishlist from '../index'

describe('Testing Category Detail screen', () => {
  it('Render screen successfully', () => {
    const component = render(<Wishlist />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
