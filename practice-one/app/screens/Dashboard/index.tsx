import { useCallback } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { Button, Heading, MenuCard, ProductCard, SliderItem, StoreCard } from '@components'
import { DASHBOARD } from '@constants'
import { ICategoryItem, IProductItem, ISliderItem, IStoreItem } from '@constants/screens/dashboard'
import { containerStyles } from '@styles'
import { renderItem } from '@utils'

import styles from './styles'

export interface HomeScreenProps extends NativeStackScreenProps<RootStackParamList, 'Home'> {}

const Dashboard = ({ navigation }: HomeScreenProps) => {
  const handleSeeAllProducts = useCallback(() => undefined, []) // TODO: Replacing with navigate to another screen
  const handleMoveToCategoryScreen = useCallback(
    ({ id, name }: ICategoryItem) => {
      navigation.navigate('CategoryDetail', { id, name })
    },
    [navigation]
  )
  const handleMoveToProduct = useCallback(
    ({ id }: IProductItem) => {
      navigation.navigate('ProductDetail', { id })
    },
    [navigation]
  )
  const renderProducts = <T extends IProductItem[]>(title: string, data: T) => (
    <>
      <View style={[containerStyles.inline, containerStyles.spaceBetween, styles.productHeading]}>
        <Heading style={styles.heading} content={title} />
        <Button
          style={styles.btn}
          titleStyle={styles.btnTitle}
          title="see all"
          shrink
          onPress={handleSeeAllProducts}
        />
      </View>
      <FlatList
        keyExtractor={({ id }: IProductItem): string => id}
        data={data}
        renderItem={renderItem(ProductCard, handleMoveToProduct)}
        horizontal
        contentContainerStyle={styles.itemSpacing}
        showsHorizontalScrollIndicator={false}
      />
    </>
  )

  return (
    <ScrollView style={styles.container}>
      <FlatList
        keyExtractor={({ id }: ISliderItem): string => id}
        data={DASHBOARD.SLIDER_DATA}
        renderItem={renderItem(SliderItem)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sliderItem}
      />
      <FlatList
        keyExtractor={({ id }: ICategoryItem): string => id}
        data={DASHBOARD.CATEGORY_DATA}
        renderItem={renderItem(MenuCard, handleMoveToCategoryScreen)}
        numColumns={4}
        columnWrapperStyle={styles.menuItem}
        scrollEnabled={false}
      />
      <View style={styles.productContainer}>
        {renderProducts('New Product', DASHBOARD.PRODUCT_DATA)}
        {renderProducts('Popular Product', DASHBOARD.PRODUCT_DATA)}
      </View>
      <View>
        <View style={styles.bgStore} />
        <View style={[containerStyles.inline, containerStyles.spaceBetween, styles.productHeading]}>
          <Heading style={[styles.heading, styles.headingWhite]} content="Store to follow" />
          <Button
            style={styles.btn}
            titleStyle={styles.btnTitle}
            title="view all"
            variant="secondary"
            shrink
            onPress={handleSeeAllProducts}
          />
        </View>
        <FlatList
          keyExtractor={({ id }: IStoreItem): string => id}
          data={DASHBOARD.STORE_DATA}
          renderItem={renderItem(StoreCard)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.itemSpacing}
        />
      </View>
    </ScrollView>
  )
}

export default Dashboard
