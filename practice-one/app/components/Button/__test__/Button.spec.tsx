import { render, fireEvent } from '@testing-library/react-native'
import Button from '../index'

describe('Testing button component', () => {
  it('Render button component with primary variant', () => {
    const mockOnPress = jest.fn()
    const component = render(
      <Button title="press here" variant="primary" onPress={mockOnPress} />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Press on button with fire onPress event', () => {
    const mockOnPress = jest.fn()
    const { getByText } = render(<Button title="press here" onPress={mockOnPress} />)

    fireEvent.press(getByText('press here'))
    expect(mockOnPress).toBeCalledTimes(1)
  })
})
