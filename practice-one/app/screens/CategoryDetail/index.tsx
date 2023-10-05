import { useFocusEffect } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { DASHBOARD } from '@constants'
import { renderItem } from '@utils'
import { WrapList, ProductCard } from '@components'
import { IProductItem } from '@constants/screens/dashboard'

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
    <WrapList
      keyExtractor={({ id }: IProductItem): string => id}
      style={styles.container}
      data={DASHBOARD.PRODUCT_DATA}
      renderItem={renderItem(ProductCard)}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default CategoryDetail
