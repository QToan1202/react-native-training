import { render } from '@testing-library/react-native'

import AddCard from '../index'

describe('Testing Add Card screen', () => {
  it('Render screen successfully', () => {
    const component = render(<AddCard />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
