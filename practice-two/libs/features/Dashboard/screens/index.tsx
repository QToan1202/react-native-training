import { useCallback, useEffect } from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'
import { ScrollView, XStack, YStack } from 'tamagui'
import { useShallow } from 'zustand/react/shallow'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import {
  Button,
  Heading,
  ProductCard,
  StoreCard,
  renderItem,
  IProduct,
  IStore,
  useGetProducts,
  useGetStores,
  useCacheStore,
} from '@practice-two/shared'
import { TabParamsList } from 'libs/shared/navigation/Tab'
import { RootStackParamList } from 'libs/shared/navigation/Stack'
import { DASHBOARD, ICategoryItem, ISliderItem } from '../constants'
import { MenuCard, SliderItem } from '../components'

import styles from './styles'

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamsList, 'HomeTab'>,
  NativeStackScreenProps<RootStackParamList>
>

const Dashboard = ({ navigation }: HomeScreenProps) => {
  const [cacheProducts, setProducts, cacheStores, setStores] = useCacheStore(
    useShallow((state) => [state.products, state.setProducts, state.stores, state.setStores])
  )
  const { data: products } = useGetProducts(process.env.PRODUCT_ENDPOINT)
  const { data: stores } = useGetStores(process.env.STORE_ENDPOINT)
  useEffect(() => {
    if (!products) return
    if (!stores) return

    setProducts(products)
    setStores(stores)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, stores])
  const handleSeeAllProducts = useCallback(() => undefined, []) // TODO: Replacing with navigate to another screen
  const handleMoveToCategoryScreen = useCallback((name: string) => {
    navigation.navigate('HomeStack', { screen: 'CategoryDetail', params: { name } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleMoveToProduct = useCallback((id: string) => {
    navigation.navigate('HomeStack', { screen: 'ProductDetail', params: { id } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const renderProductItem: ListRenderItem<IProduct> = useCallback(
    ({ item: { id, img, price, discountPrice, name, store } }) => (
      <ProductCard
        id={String(id)}
        img={{ uri: img }}
        price={price}
        discountPrice={discountPrice}
        title={name}
        avatar={{ uri: store.avatar }}
        storeName={store.name}
        onPressCard={handleMoveToProduct}
      />
    ),
    [handleMoveToProduct]
  )
  const renderProducts = useCallback(
    <T extends IProduct[]>(title: string, data: T) => {
      if (!data.length)
        return (
          <YStack padding="$space.4">
            <Heading
              content="Product empty!!!"
              color="$color.gray_50"
              fontWeight="$3"
              fontSize="$1"
              textAlign="center"
            />
          </YStack>
        )

      return (
        <>
          <XStack
            alignItems="center"
            justifyContent="space-between"
            space="$space.1.5"
            marginVertical="$space.3.5"
            paddingHorizontal="$space.4.5"
          >
            <Heading content={title} color="$color.gray_50" fontSize="$3" />
            <Button
              shrink
              title="see all"
              paddingHorizontal="$space.5"
              paddingVertical="$space.1.5"
              fontSize={12}
              onPress={handleSeeAllProducts}
            />
          </XStack>
          <FlatList
            keyExtractor={({ id }: IProduct): string => String(id)}
            data={data}
            renderItem={renderProductItem}
            horizontal
            contentContainerStyle={styles.itemSpacing}
            showsHorizontalScrollIndicator={false}
          />
        </>
      )
    },
    [handleSeeAllProducts, renderProductItem]
  )
  const renderCategoryItem: ListRenderItem<ICategoryItem> = useCallback(
    ({ item }) => <MenuCard {...item} onPress={handleMoveToCategoryScreen} />,
    [handleMoveToCategoryScreen]
  )
  const renderStoreItem: ListRenderItem<IStore> = useCallback(
    ({ item: { avatar, name } }) => (
      <StoreCard
        bgImage={require('@assets/store/tradly.png')}
        source={{ uri: avatar }}
        name={`${name} store`}
        btnTitle="follow"
      />
    ),
    []
  )

  return (
    <ScrollView flex={1} backgroundColor="$color.white">
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
        renderItem={renderCategoryItem}
        numColumns={4}
        columnWrapperStyle={styles.menuItem}
        contentContainerStyle={styles.categories}
        scrollEnabled={false}
      />
      <YStack marginVertical="$space.3">
        <>
          {renderProducts('New Product', products || cacheProducts)}
          {renderProducts('Popular Product', products || cacheProducts)}
        </>
      </YStack>
      <YStack>
        <View style={styles.bgStore} />
        <XStack
          alignItems="center"
          justifyContent="space-between"
          space="$space.1.5"
          marginVertical="$space.3.5"
          paddingHorizontal="$space.4.5"
        >
          <Heading content="Store to follow" color="$color.white" fontSize="$3" />
          <Button
            shrink
            paddingHorizontal="$space.5"
            paddingVertical="$space.1.5"
            fontSize={12}
            title="view all"
            variant="secondary"
            onPress={handleSeeAllProducts}
          />
        </XStack>
        <FlatList
          keyExtractor={({ id }: IStore): string => id}
          data={stores || cacheStores}
          renderItem={renderStoreItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.itemSpacing}
        />
      </YStack>
    </ScrollView>
  )
}

export default Dashboard
