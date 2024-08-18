import { render } from '@testing-library/react-native'

import Payment from '../index'

describe('Testing Payment screen', () => {
  it('Render screen successfully', () => {
    const component = render(<Payment />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
