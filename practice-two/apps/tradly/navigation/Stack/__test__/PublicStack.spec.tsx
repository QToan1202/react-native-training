import { render } from 'test-utils'

import Stack from '../index'

describe('Testing public stack navigation', () => {
  it('Render stack successfully', () => {
    const component = render(<Stack.PublicStackNavigator />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
