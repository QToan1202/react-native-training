import { FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { DASHBOARD } from '@constants'
import { renderItem } from '@utils'
import { ProductCard } from '@components'

import styles from './styles'

export interface CategoryDetailScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'CategoryDetail'> {}

const CategoryDetail = ({ route, navigation }: CategoryDetailScreenProps) => {
  // TODO: Change data
  useFocusEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.name,
    })
  })

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
