import { render } from 'test-utils'

import CategoryDetail from '../index'

describe('Testing Category Detail screen', () => {
  it('Render screen successfully', () => {
    const component = render(<CategoryDetail />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
