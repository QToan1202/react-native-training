import { render } from '@testing-library/react-native'

import Login from '../index'

describe('Testing Login screen', () => {
  it('Render screen successfully', () => {
    const component = render(<Login />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
