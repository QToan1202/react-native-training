import { render } from '@testing-library/react-native'
import { FieldError } from 'react-hook-form'

import ErrorMessage from '../index'

jest.mock('react-hook-form')

const fakeError: FieldError = { type: 'required', message: 'error' }

describe('Testing Error Message component', () => {
  it('Render component successfully', () => {
    const component = render(<ErrorMessage error={fakeError} />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Message must visible on the screen', () => {
    const { getByText } = render(<ErrorMessage error={fakeError} />)

    expect(getByText(/error/)).toBeVisible()
  })
})
