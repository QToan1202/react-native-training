import { useFocusEffect } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { DASHBOARD, renderItem, WrapList, ProductCard } from '@practice-two/shared'
import { RootStackParamList } from 'libs/shared/navigation/Stack'

import styles from './styles'

export type CategoryDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'CategoryDetail'>

const CategoryDetail = ({ route, navigation }: CategoryDetailScreenProps) => {
  // TODO: Change data
  useFocusEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.name,
    })
  })

  return (
    <WrapList
      keyExtractor={({ id }): string => id}
      style={styles.container}
      data={DASHBOARD.PRODUCT_DATA}
      renderItem={renderItem(ProductCard)}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default CategoryDetail
