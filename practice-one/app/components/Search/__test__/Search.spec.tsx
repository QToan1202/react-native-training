import { render, fireEvent } from '@testing-library/react-native'

import Search from '../index'

describe('Testing Search component', () => {
  it('Render Search component success', () => {
    const component = render(<Search placeholder="my search input" />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('When change input value onChangeText must be called with right props', () => {
    const { getByPlaceholderText } = render(<Search placeholder="my search input" />)
    const element = getByPlaceholderText('my search input')

    fireEvent.changeText(element, 'new products')
    expect(element.props.value).toEqual('new products')
  })
})
