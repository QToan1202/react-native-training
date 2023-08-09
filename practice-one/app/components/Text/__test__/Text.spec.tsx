import { render } from '@testing-library/react-native'
import Text from '../index'

test('Render text component', () => {
  const component = render(<Text content="my normal text" />).toJSON()

  expect(component).toMatchSnapshot()
})

test('Text component when rendered have right content as prop', () => {
  const { getByText } = render(<Text content="my normal text" />)

  expect(getByText('my normal text')).toBeTruthy()
})
