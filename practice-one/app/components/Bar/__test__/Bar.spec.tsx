import { render } from '@testing-library/react-native'

import { COLORS } from '@constants'

import Bar from '../index'

describe('Testing Bar component', () => {
  it('Render Bar component success', () => {
    const component = render(<Bar title="home" />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Bar component render with primary color', () => {
    const { getByTestId } = render(<Bar title="heading" testID="bar" />)

    expect(getByTestId('bar')).toHaveStyle({ backgroundColor: COLORS.PRIMARY })
  })

  it('Bar component contain text component that match with title prop', () => {
    const { getByTestId, getByText } = render(<Bar title="heading" testID="bar" />)

    expect(getByTestId('bar')).toContainElement(getByText('heading'))
  })
})
