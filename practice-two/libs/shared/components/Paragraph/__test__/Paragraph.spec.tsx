import { render } from '@testing-library/react-native'
import Paragraph from '../index'

test('Render text component', () => {
  const component = render(<Paragraph content="my normal text" />).toJSON()

  expect(component).toMatchSnapshot()
})

test('Text component when rendered have right content as prop', () => {
  const { getByText } = render(<Paragraph content="my normal text" />)

  expect(getByText('my normal text')).toBeTruthy()
})
