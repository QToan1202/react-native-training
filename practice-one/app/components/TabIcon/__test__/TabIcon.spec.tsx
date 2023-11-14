import { render } from '@testing-library/react-native'

import TabIcon from '../index'

describe('Testing tab icon component', () => {
  it('Render icon successfully', () => {
    const component = render(<TabIcon.Home color="#000" />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Tab icon must have right tint color', () => {
    const { getByTestId } = render(<TabIcon.Home color="#000" testID="icon" />)

    expect(getByTestId('icon')).toHaveStyle({ tintColor: '#000' })
    expect(getByTestId('icon')).not.toHaveStyle({ tintColor: '#fff' })
  })
})
