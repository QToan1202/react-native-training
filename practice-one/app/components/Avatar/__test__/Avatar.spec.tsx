import { render } from '@testing-library/react-native'

import Avatar from '../index'

describe('Testing avatar component', () => {
  it('Render avatar successfully', () => {
    const component = render(<Avatar source={require('@assets/avatar.png')} name="user" />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Avatar must have accessibilityLabel that include name prop', () => {
    const avatarName: string = 'user'
    const { queryByLabelText } = render(
      <Avatar source={require('@assets/avatar.png')} name={avatarName} testID="avatar" />
    )

    expect(queryByLabelText(`${avatarName}-avatar`)).toBeTruthy()
    expect(queryByLabelText(`${avatarName}`)).toBeFalsy()
    expect(queryByLabelText('avatar')).toBeFalsy()
  })

  it('Avatar component have to contain Image and Paragraph component', () => {
    const { getByTestId, getByText, getByLabelText } = render(
      <Avatar source={require('@assets/avatar.png')} name="user" testID="avatar" />
    )
    const ImageComponent = getByLabelText('user-avatar')
    const ParagraphComponent = getByText('user')

    expect(getByTestId('avatar')).toContainElement(ImageComponent)
    expect(getByTestId('avatar')).toContainElement(ParagraphComponent)
  })
})
