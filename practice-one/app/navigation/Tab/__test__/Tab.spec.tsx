import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import BottomNav from '../index'

describe('Testing bottom tab navigation', () => {
  it('Render tab successfully', () => {
    const component = render(
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    ).toJSON()

    expect(component).toMatchSnapshot()
  })
})
