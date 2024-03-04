import { useCallback, useMemo } from 'react'
import { Spinner, YStack } from 'tamagui'
import { FlatList, ListRenderItem } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import {
  ProductCard,
  Heading,
  Paragraph,
  useGetProducts,
  useGetWishlist,
  IProduct,
  IWishlistBase,
  productListStyles,
  useAuthStore,
  Feature,
} from '@practice-two/shared'
import { RootStackParamList } from 'libs/shared/navigation/Stack'

export type WishlistScreenProps = NativeStackScreenProps<RootStackParamList, 'Wishlist'>

const Wishlist = ({ navigation }: WishlistScreenProps) => {
  const user = useAuthStore((state) => state.user)
  const {
    data: wishlists,
    isSuccess: isSuccessGetWishlist,
    isLoading,
  } = useGetWishlist(process.env.WISHLIST_ENDPOINT, String(user?.id))
  const { data: products, isSuccess: isSuccessGetProducts } = useGetProducts(
    process.env.PRODUCT_ENDPOINT
  )
  const productsInWishlist = useMemo(() => {
    if (!isSuccessGetWishlist) return []
    if (!isSuccessGetProducts) return []

    return products.filter((product: IProduct) =>
      wishlists.some(({ productId }: IWishlistBase) => productId === product.id)
    )
  }, [isSuccessGetProducts, isSuccessGetWishlist, products, wishlists])

  const handleMoveToProduct = useCallback((id: string) => {
    navigation.navigate('ProductDetail', { id })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const renderProductItem: ListRenderItem<IProduct> = useCallback(
    ({ item }) => {
      if (!isSuccessGetProducts) return null
      if (!isSuccessGetWishlist) return null
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
    [isSuccessGetProducts, isSuccessGetWishlist, handleMoveToProduct]
  )
  const Item = useMemo(() => {
    if (isLoading) return <Spinner size="large" color="$color.primary" />
    if (!isSuccessGetWishlist) return null
    if (!wishlists.length)
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
        data={productsInWishlist}
        renderItem={renderProductItem}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        style={productListStyles.container}
        contentContainerStyle={productListStyles.item}
        columnWrapperStyle={productListStyles.column}
      />
    )
  }, [isLoading, isSuccessGetWishlist, wishlists, productsInWishlist, renderProductItem])

  return (
    <Feature feat="wishlist">
      <YStack flex={1} backgroundColor="$color.bg_layer">
        {Item}
      </YStack>
    </Feature>
  )
}

export default Wishlist
