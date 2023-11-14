import { render } from 'test-utils'

import Stack from '../index'

describe('Testing private stack navigation', () => {
  it('Render stack successfully', () => {
    const component = render(<Stack.PrivateStackNavigator />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
