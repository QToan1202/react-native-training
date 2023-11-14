import { render } from '@testing-library/react-native'

import PaymentCardPlaceHolder from '../PlaceHolder'

describe('Testing Payment Card placeholder component', () => {
  it('Render Payment Card placeholder component success', () => {
    const component = render(<PaymentCardPlaceHolder />).toJSON()

    expect(component).toMatchSnapshot()
  })
})
