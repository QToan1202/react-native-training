/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo, useEffect } from 'react'
import { ToastAndroid } from 'react-native'
import { ScrollView, Spinner, XStack, YStack, getTokenValue } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useShallow } from 'zustand/react/shallow'

import { Avatar, Button, Heading, IconButton, Paragraph, TabBar } from '@components'
import { CATEGORY } from '@constants'
import { useAddToWishlist, useDeleteFromWishlist, useFindProduct, useGetWishlist } from '@hooks'
import { useAuthStore, useCacheStore, useCartStore } from '@stores'
import { RootStackParamList } from '@navigation/Stack'
import { IProduct, IWishlistBase } from '@types'
import { calculateDiscount } from '@utils'

import StyledImageBackground from './styles'

export type ProductDetailProps = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>

const ProductDetail = ({ navigation, route }: ProductDetailProps) => {
  const [cacheProducts, setWishlist] = useCacheStore(
    useShallow((state) => [state.products, state.setWishlist])
  )
  const user = useAuthStore((state) => state.user)
  const addToCart = useCartStore((state) => state.add)
  const { id } = route.params
  const findProduct: IProduct | undefined = cacheProducts.find((item) => item.id === +id)
  const { data: fetchProductData, isSuccess: isFindProductSuccess } = useFindProduct(
    process.env.PRODUCT_ENDPOINT,
    id
  )
  const product = useMemo(() => {
    if (!isFindProductSuccess) {
      if (!findProduct) return undefined // When fetching API and cache data DON'T HAVE the required product

      return findProduct // When fetching API and cache data HAVE the required product
    }

    // Fetch API success
    return fetchProductData
  }, [isFindProductSuccess])
  const { data: wishlist, isSuccess: isGetWishlistSuccess } = useGetWishlist(
    process.env.WISHLIST_ENDPOINT,
    String(user?.id)
  )
  const { mutate: addToWishList } = useAddToWishlist(
    process.env.WISHLIST_ENDPOINT,
    String(user?.id)
  )
  const { mutate: deleteFromWishlist } = useDeleteFromWishlist(
    process.env.WISHLIST_ENDPOINT,
    String(user?.id)
  )
  useEffect(() => {
    if (!wishlist) return

    setWishlist(wishlist)
  }, [wishlist])

  const checkProductInWishlist = useMemo(() => {
    if (!isFindProductSuccess) return false
    if (!isGetWishlistSuccess) return false

    return wishlist.some((item: IWishlistBase) => item.productId === +id)
  }, [isFindProductSuccess, isGetWishlistSuccess, wishlist])

  const likeIcon = checkProductInWishlist
    ? require('@assets/love.png')
    : require('@assets/heart.png')

  const handleLikeProduct = useCallback(() => {
    if (!user) return
    if (!isGetWishlistSuccess) return

    if (checkProductInWishlist) {
      const wishlistItem: IWishlistBase | undefined = wishlist.find(
        (item) => item.productId === +id
      )

      if (!wishlistItem) return

      deleteFromWishlist({ id: wishlistItem.id })
      return
    }

    addToWishList({
      productId: Number(id),
      userId: Number(user.id),
    })
  }, [user, isGetWishlistSuccess, checkProductInWishlist, id])

  const handleBackPress = useCallback(() => navigation.goBack(), [])
  const handlePress = useCallback(() => undefined, [])
  const handleAddToCart = useCallback(() => {
    if (!product) return

    addToCart(product)
    ToastAndroid.show('A new product have added to cart!', ToastAndroid.SHORT)
  }, [product])
  const Categories: React.JSX.Element[] = useMemo(
    () =>
      CATEGORY.map((item: string) => (
        <Paragraph
          key={item}
          content={item}
          color="$color.gray_50"
          lineHeight="$4"
          textTransform="capitalize"
        />
      )),
    []
  )
  const { top: topInset } = useSafeAreaInsets()

  return product ? (
    <>
      <ScrollView
        backgroundColor="$color.bg_layer"
        space="$space.2"
        showsVerticalScrollIndicator={false}
      >
        <YStack>
          <StyledImageBackground source={require('@assets/cart/item.png')}>
            <XStack
              flex={1}
              justifyContent="space-between"
              paddingTop={topInset + getTokenValue('$space.1')}
              paddingHorizontal="$space.3"
              backgroundColor="$color.img_overlay"
            >
              <IconButton icon={require('@assets/back.png')} onPress={handleBackPress} />
              <XStack alignItems="center" space="$space.1.5">
                <IconButton icon={require('@assets/share.png')} onPress={handlePress} />
                <IconButton icon={likeIcon} onPress={handleLikeProduct} />
                <IconButton icon={require('@assets/more.png')} onPress={handlePress} />
              </XStack>
            </XStack>
          </StyledImageBackground>
          <YStack
            space="$space.2.5"
            backgroundColor="$color.white"
            paddingHorizontal="$space.3.5"
            paddingTop="$space.3.5"
            paddingBottom="$space.5"
          >
            <Heading
              content={product.name}
              fontSize="$3"
              color="$color.gray_50"
              textTransform="capitalize"
            />
            <XStack space>
              <Heading
                content={`$${
                  product.discountPrice
                    ? product.discountPrice.toFixed(2)
                    : product.price.toFixed(2)
                }`}
                fontSize="$3"
                color="$color.primary"
              />
              {product.discountPrice !== 0 && (
                <XStack space="$space.1.5">
                  <Heading
                    content={`$${product.price.toFixed(2)}`}
                    fontSize="$true"
                    fontWeight="$2"
                    color="$color.gray_50"
                    textDecorationLine="line-through"
                  />
                  <Heading
                    content={calculateDiscount(product.price, product.discountPrice)}
                    fontSize="$true"
                    fontWeight="$2"
                    color="$color.gray_50"
                  />
                </XStack>
              )}
            </XStack>
          </YStack>
        </YStack>
        <XStack
          alignItems="center"
          justifyContent="space-between"
          paddingVertical="$space.4.5"
          paddingHorizontal="$space.3"
          backgroundColor="$color.white"
        >
          <Avatar
            size="md"
            source={{ uri: product.store.avatar }}
            name={`${product.store.name} store`}
          />
          <Button
            shrink
            title="follow"
            paddingVertical="$space.1.5"
            paddingHorizontal="$space.5"
            fontSize={12}
            onPress={handlePress}
          />
        </XStack>
        <YStack
          paddingBottom="$space.3"
          paddingHorizontal="$space.6"
          borderRadius="$radius.4"
          space="$space.3.5"
          backgroundColor="$color.white"
        >
          <Paragraph content={product.description} color="$color.gray_50" lineHeight="$4" />
        </YStack>
        <YStack
          paddingBottom="$space.3"
          paddingHorizontal="$space.6"
          borderRadius="$radius.4"
          space="$space.3.5"
          backgroundColor="$color.white"
        >
          <Heading
            content="Details"
            paddingVertical="$space.3"
            color="$color.black"
            fontSize="$3"
            fontWeight="$3"
            lineHeight="$4"
            textTransform="capitalize"
          />
          <XStack alignItems="center" space="$space.10">
            <YStack maxWidth={120} space="$space.3.5" opacity={0.7}>
              {Categories}
            </YStack>
            <YStack maxWidth={200} space="$space.3.5">
              <Paragraph
                content={product.condition}
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
              <Paragraph
                content={product.priceType}
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
              <Paragraph
                content={product.category.name}
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
              <Paragraph
                content={product.location}
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
            </YStack>
          </XStack>
        </YStack>
        <YStack
          paddingBottom="$space.3"
          paddingHorizontal="$space.6"
          borderRadius="$radius.4"
          space="$space.3.5"
          backgroundColor="$color.white"
        >
          <Heading
            content="Additional Details"
            paddingVertical="$space.3"
            color="$color.black"
            fontSize="$3"
            fontWeight="$3"
            lineHeight="$4"
            textTransform="capitalize"
          />
          <XStack alignItems="center" space="$space.6">
            <YStack maxWidth={120} space="$space.3.5" opacity={0.7}>
              <Paragraph
                content="delivery details"
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
            </YStack>
            <YStack maxWidth={200} space="$space.3.5">
              <Paragraph
                content={product.delivery}
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
            </YStack>
          </XStack>
        </YStack>
      </ScrollView>
      <TabBar title="Add To Cart" onPress={handleAddToCart} />
    </>
  ) : (
    <Spinner size="large" color="$color.primary" />
  )
}

export default ProductDetail
