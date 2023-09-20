import { render } from 'test-utils'

import BottomNav from '../index'

describe('Testing bottom tab navigation', () => {
  it('Render tab successfully', () => {
    const component = render(<BottomNav />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
