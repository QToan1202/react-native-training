import { render, fireEvent } from '@testing-library/react-native'

import IconButton from '../index'

describe('Testing icon button component', () => {
  it('Render button component with an icon', () => {
    const mockOnPress = jest.fn()
    const component = render(
      <IconButton icon={require('@assets/favicon.png')} onPress={mockOnPress} noBackground />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Press on button with fire onPress event', () => {
    const mockOnPress = jest.fn()
    mockOnPress.mockReturnValue(true)

    const { getByLabelText } = render(
      <IconButton
        icon={require('@assets/favicon.png')}
        onPress={mockOnPress}
        accessibilityLabel="icon button"
      />
    )

    fireEvent.press(getByLabelText('icon button'))
    expect(mockOnPress).toBeCalledTimes(1)
    expect(mockOnPress.mock.results[0].value).toBeTruthy()
  })
})
