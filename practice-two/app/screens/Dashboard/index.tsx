import { useCallback } from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, Spinner, XStack, YStack } from 'tamagui'

import { RootStackParamList } from '@navigation/Stack'
import { Button, Heading, MenuCard, ProductCard, SliderItem, StoreCard } from '@components'
import { DASHBOARD } from '@constants'
import { ICategoryItem, ISliderItem } from '@constants/screens/dashboard'
import { renderItem } from '@utils'
import { useGetProducts, useGetStores } from '@hooks'
import { IProductExpand, IStore } from '@types'

import styles from './styles'

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Dashboard = ({ navigation }: HomeScreenProps) => {
  const { data: products, isSuccess: isGetProductSuccess } = useGetProducts(
    process.env.PRODUCT_ENDPOINT
  )
  const { data: stores, isSuccess: isGetStoreSuccess } = useGetStores(process.env.STORE_ENDPOINT)
  const handleSeeAllProducts = useCallback(() => undefined, []) // TODO: Replacing with navigate to another screen
  const handleMoveToCategoryScreen = useCallback(({ id, name }: ICategoryItem) => {
    navigation.navigate('CategoryDetail', { id, name })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleMoveToProduct = useCallback((id: string) => {
    navigation.navigate('ProductDetail', { id })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const renderProductItem: ListRenderItem<IProductExpand> = useCallback(
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
  const renderProducts = <T extends IProductExpand[]>(title: string, data: T) => (
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
        keyExtractor={({ id }: IProductExpand): string => String(id)}
        data={data}
        renderItem={renderProductItem}
        horizontal
        contentContainerStyle={styles.itemSpacing}
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
  const renderStoreItem: ListRenderItem<IStore> = ({ item: { avatar, name } }) => (
    <StoreCard
      bgImage={require('@assets/store/tradly.png')}
      source={{ uri: avatar }}
      name={`${name} store`}
      btnTitle="follow"
    />
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
        renderItem={renderItem(MenuCard, handleMoveToCategoryScreen)}
        numColumns={4}
        columnWrapperStyle={styles.menuItem}
        scrollEnabled={false}
      />
      <YStack marginVertical="$space.3">
        {isGetProductSuccess ? (
          <>
            {renderProducts('New Product', products)}
            {renderProducts('Popular Product', products)}
          </>
        ) : (
          <Spinner size="large" color="$color.primary" />
        )}
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
        {isGetStoreSuccess ? (
          <FlatList
            keyExtractor={({ id }: IStore): string => id}
            data={stores}
            renderItem={renderStoreItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.itemSpacing}
          />
        ) : (
          <Spinner size="large" color="$color.primary" />
        )}
      </YStack>
    </ScrollView>
  )
}

export default Dashboard
