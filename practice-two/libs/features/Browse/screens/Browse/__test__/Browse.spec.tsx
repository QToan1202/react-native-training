import { render } from 'test-utils'

import Browse from '../index'

describe('Testing Category Detail screen', () => {
  it('Render screen successfully', () => {
    const component = render(<Browse />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
