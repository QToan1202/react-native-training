import { FlatList } from 'react-native'

import { DASHBOARD } from '@constants'
import { renderItem } from '@utils'
import { ProductCard } from '@components'

import styles from './styles'

const CategoryDetail = () => {
  // TODO: Change data
  return (
    <FlatList
      style={styles.container}
      data={DASHBOARD.PRODUCT_DATA}
      renderItem={renderItem(ProductCard)}
      contentContainerStyle={styles.item}
      columnWrapperStyle={styles.column}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default CategoryDetail
