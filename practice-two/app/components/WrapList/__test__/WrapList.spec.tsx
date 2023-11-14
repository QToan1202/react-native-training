import { render } from '@testing-library/react-native'
import { DASHBOARD } from '@constants'
import { renderItem } from '@utils'
import ProductCard from '@components/ProductCard'

import List from '../index'

describe('Testing List component', () => {
  it('Render List success', () => {
    const component = render(
      <List
        keyExtractor={({ id }) => id}
        data={DASHBOARD.PRODUCT_DATA}
        renderItem={renderItem(ProductCard)}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })
})
