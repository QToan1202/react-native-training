import { render, fireEvent, screen } from '@testing-library/react-native'
import Button from '../index'

const mockOnPress = jest.fn()

describe('Testing button component', () => {
  beforeEach(() => {
    render(
      <>
        <Button title="primary button" variant="primary" onPress={mockOnPress} />
        <Button title="secondary button" variant="secondary" onPress={mockOnPress} />
        <Button title="quaternary button" variant="quaternary" onPress={mockOnPress} />
        <Button title="tertiary button" variant="tertiary" onPress={mockOnPress} />
        <Button title="default button" onPress={mockOnPress} />
      </>
    )
  })

  it('Render button component with primary variant', () => {
    const component = render(
      <Button
        title="press here"
        variant="primary"
        leftIcon={require('@assets/icon.png')}
        rightIcon={require('@assets/icon.png')}
        onPress={mockOnPress}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Press on button with fire onPress event', () => {
    const btn = screen.getByText('default button')

    fireEvent.press(btn)
    expect(mockOnPress).toBeCalledTimes(1)
  })
})
