import { render } from '@testing-library/react-native'
import Heading from '../index'

test('Render heading component', () => {
  const component = render(<Heading content="my heading" />).toJSON()

  expect(component).toMatchSnapshot()
})