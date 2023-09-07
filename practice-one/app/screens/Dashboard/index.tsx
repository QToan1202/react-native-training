import { useCallback } from 'react'
import { FlatList, ListRenderItemInfo, ScrollView, View } from 'react-native'

import { Button, Heading, MenuCard, ProductCard, SliderItem, StoreCard } from '@components'
import { DASHBOARD } from '@constants'
import { IProductItem } from '@constants/dashboard'
import { containerStyles } from '@styles'
import { IFlatListBase } from '@types'

import styles from './styles'

const renderItem =
  <T extends IFlatListBase>(Element: React.JSX.ElementType) =>
  // eslint-disable-next-line react/function-component-definition
  ({ item: { ...rest } }: ListRenderItemInfo<T>) => <Element {...rest} />

const Dashboard = () => {
  const handleSeeAllProducts = useCallback(() => undefined, []) // TODO: Replacing with navigate to another screen
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
        data={data}
        renderItem={renderItem(ProductCard)}
        horizontal
        contentContainerStyle={styles.itemSpacing}
        showsHorizontalScrollIndicator={false}
      />
    </>
  )

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={DASHBOARD.SLIDER_DATA}
        renderItem={renderItem(SliderItem)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sliderItem}
      />
      <FlatList
        data={DASHBOARD.CATEGORY_DATA}
        renderItem={renderItem(MenuCard)}
        numColumns={4}
        columnWrapperStyle={styles.menuItem}
        scrollEnabled={false}
      />
      <View style={styles.productContainer}>
        {renderProducts('New Product', DASHBOARD.PRODUCT_DATA)}
        {renderProducts('Popular Product', DASHBOARD.PRODUCT_DATA)}
      </View>
      <View style={styles.storeContainer}>
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
