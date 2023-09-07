import { render } from '@testing-library/react-native'

import CategoryDetail from '../index'

describe('Testing Category Detail screen', () => {
  it('Render screen successfully', () => {
    const component = render(<CategoryDetail />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
