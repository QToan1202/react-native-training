import { FlatList } from 'react-native'

import { CategoryItem } from '@practice-three/components'

import { CATEGORY_DATA } from '../../../constants'

const Category = () => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={CATEGORY_DATA}
    renderItem={({ item: itemProps, index }) => <CategoryItem key={index} {...itemProps} />}
  />
)

export default Category
