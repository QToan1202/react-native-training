import { render } from '@testing-library/react-native'

import Dashboard from '../index'

describe('Testing Dashboard screen', () => {
  it('Render screen successfully', () => {
    const component = render(<Dashboard />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
