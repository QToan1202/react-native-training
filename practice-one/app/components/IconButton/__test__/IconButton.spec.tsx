import { Image } from 'react-native'
import { render, fireEvent } from '@testing-library/react-native'

import IconButton from '../index'

describe('Testing icon button component', () => {
  it('Render button component with an icon', () => {
    const mockOnPress = jest.fn()
    const component = render(
      <IconButton onPress={mockOnPress} noBackground>
        <Image source={require('@assets/favicon.png')} />
      </IconButton>
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Press on button with fire onPress event', () => {
    const mockOnPress = jest.fn()
    mockOnPress.mockReturnValue(true)

    const { getByLabelText } = render(
      <IconButton onPress={mockOnPress} accessibilityLabel="icon button">
        <Image source={require('@assets/favicon.png')} />
      </IconButton>
    )

    fireEvent.press(getByLabelText('icon button'))
    expect(mockOnPress).toBeCalledTimes(1)
    expect(mockOnPress.mock.results[0].value).toBeTruthy()
  })
})
