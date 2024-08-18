import { render } from '@testing-library/react-native'

import SignUp from '../index'

describe('Testing Sign Up screen', () => {
  it('Render screen successfully', () => {
    const component = render(<SignUp />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
