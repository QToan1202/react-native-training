import { useCallback, useMemo } from 'react'
import { Spinner, YStack } from 'tamagui'
import { FlatList, ListRenderItem } from 'react-native'
import { CompositeScreenProps } from '@react-navigation/native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import {
  ProductCard,
  Heading,
  Paragraph,
  IProduct,
  productListStyles,
  useGetProducts,
} from '@practice-two/shared'
import { TabParamsList } from 'libs/shared/navigation/Tab'
import { RootStackParamList } from 'libs/shared/navigation/Stack'

export type BrowseScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamsList, 'BrowseTab'>,
  NativeStackScreenProps<RootStackParamList>
>

const Browse = ({ navigation }: BrowseScreenProps) => {
  const { data: products, isSuccess, isLoading } = useGetProducts(process.env.PRODUCT_ENDPOINT)

  const handleMoveToProduct = useCallback((id: string) => {
    navigation.navigate('BrowseStack', { screen: 'ProductDetail', params: { id } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const renderProductItem: ListRenderItem<IProduct> = useCallback(
    ({ item }) => {
      if (!isSuccess) return null
      const { id, img, price, discountPrice, name, store } = item

      return (
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
      )
    },
    [isSuccess, handleMoveToProduct]
  )
  const Item = useMemo(() => {
    if (isLoading) return <Spinner size="large" color="$color.primary" />
    if (!isSuccess) return null
    if (!products.length)
      return (
        <YStack paddingVertical="$space.4" paddingHorizontal="$space.10">
          <Heading
            content="List empty!!!!"
            color="$color.dark_50"
            fontWeight="$3"
            fontSize="$3"
            textAlign="center"
          />
          <Paragraph
            content="Don't have any products"
            color="$color.gray_50"
            fontSize="$2"
            fontWeight="$2"
            textAlign="center"
          />
        </YStack>
      )

    return (
      <FlatList
        keyExtractor={({ id }: IProduct): string => String(id)}
        data={products}
        renderItem={renderProductItem}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        style={productListStyles.container}
        contentContainerStyle={productListStyles.item}
        columnWrapperStyle={productListStyles.column}
      />
    )
  }, [isLoading, isSuccess, products, renderProductItem])

  return (
    <YStack flex={1} backgroundColor="$color.bg_layer">
      {Item}
    </YStack>
  )
}

export default Browse
