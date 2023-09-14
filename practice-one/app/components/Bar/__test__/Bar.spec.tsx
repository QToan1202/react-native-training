import { render, screen } from '@testing-library/react-native'

import { COLORS } from '@constants'
import { IIconList } from '@types'

import Bar from '../index'

const iconList: IIconList[] = [
  {
    label: 'favicon',
    icon: require('@assets/favicon.png'),
    action: () => undefined,
  },
]
const mockPressBackFn = jest.fn()

describe('Testing Bar component', () => {
  beforeEach(() => {
    render(
      <Bar
        title="heading"
        iconList={iconList}
        showBackBtn
        onPressBack={mockPressBackFn}
        testID="bar"
      />
    )
  })

  it('Render Bar component success', () => {
    const component = render(<Bar title="home" iconList={[]} />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Bar component render with primary color', () => {
    const component = screen.getByTestId('bar')

    expect(component).toHaveStyle({ backgroundColor: COLORS.PRIMARY })
  })

  it('Bar component contain text component that match with title prop', () => {
    const bar = screen.getByTestId('bar')
    const title = screen.getByText('heading')

    expect(bar).toContainElement(title)
  })
})
