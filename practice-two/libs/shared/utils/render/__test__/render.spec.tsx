import { render } from '@testing-library/react-native'
import { FlatList } from 'react-native'

import { ProductCard } from '@components'
import { DASHBOARD } from '@constants'

import renderItem from '../index'

describe('Testing renderItem function', () => {
  it('Function that using by FlatList must stable on every render', () => {
    const mockFn = jest.fn()
    const component = render(
      <FlatList data={DASHBOARD.PRODUCT_DATA} renderItem={renderItem(ProductCard, mockFn)} />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })
})
