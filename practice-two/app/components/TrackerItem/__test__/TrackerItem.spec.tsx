import { render, screen } from '@testing-library/react-native'

import TrackerItem from '../index'

const mockedDate = new Date(2023, 7, 28)
jest.useFakeTimers()
jest.setSystemTime(mockedDate)

describe('Testing Tracker item component', () => {
  beforeEach(() => {
    render(
      <TrackerItem
        trackStatus="order placed"
        description="Order#123455 from Fashion Point"
        date={new Date()}
        time="11:30 AM"
        testID="tracker-item"
      />
    )
  })

  it('Render Tracker item success', () => {
    const component = render(
      <TrackerItem
        trackStatus="order placed"
        description="Order#123455 from Fashion Point"
        date={new Date()}
        time="11:30 AM"
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('An item must have the title and description about status', () => {
    const component = screen.getByTestId('tracker-item')
    const title = screen.getByText('order placed')
    const description = screen.getByText('Order#123455 from Fashion Point')

    expect(component).toContainElement(title)
    expect(component).toContainElement(description)
  })
})
