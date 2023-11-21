import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { DASHBOARD } from '@constants'
import { renderItem } from '@utils'
import { WrapList, ProductCard } from '@components'
import { IProductItem } from '@constants/screens/dashboard'

import styles from './styles'

export interface BrowseScreenProps extends NativeStackScreenProps<RootStackParamList, 'Browse'> {}

const Browse = () => {
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

export default Browse
