import { render, fireEvent, screen, act } from '@testing-library/react-native'

import Picker from '../index'

const listData = [
  {
    id: 'vn',
    name: 'vietnam',
    value: '+84',
  },
  {
    id: 'en',
    name: 'england',
    value: '+44',
  },
]

describe('Testing Picker component', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    render(<Picker listData={listData} testID="picker" />)
  })

  it('Render Picker component success', () => {
    const component = render(<Picker listData={listData} />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('First item of the list data will be selected on the init render', () => {
    const component = screen.getByText('+84')

    expect(component).toBeOnTheScreen()
  })

  it('When tap on the picker show items as a dropdown component', async () => {
    const component = screen.getByTestId('picker')
    fireEvent.press(component)
    act(() => {
      jest.runAllTimers()
    })

    const firstDropdownItem = await screen.findAllByText('+84')
    const secondDropdownItem = await screen.findByText('+44')

    expect(firstDropdownItem.pop()).toBeOnTheScreen()
    expect(secondDropdownItem).toBeOnTheScreen()
  })
})
