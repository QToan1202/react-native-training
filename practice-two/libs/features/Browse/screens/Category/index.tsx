import { useFocusEffect } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { WrapList, ProductCard } from '@practice-two/shared/components'
import { Feature } from '@practice-two/shared/hocs'
import { renderItem } from '@practice-two/shared/utils'
import { RootStackParamList } from '@practice-two/shared/types'

import { PRODUCT_DATA } from '../../constants'

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
    <Feature feat="browse">
      <WrapList
        keyExtractor={({ id }): string => id}
        style={styles.container}
        data={PRODUCT_DATA}
        renderItem={renderItem(ProductCard)}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
    </Feature>
  )
}

export default CategoryDetail
