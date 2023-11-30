/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from 'react'
import { ScrollView, Spinner, XStack, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Avatar, Button, Heading, IconButton, Paragraph, TabBar } from '@components'
import { CATEGORY } from '@constants'
import { useAddToWishlist, useDeleteFromWishlist, useFindProduct, useGetWishlist } from '@hooks'
import { useAuthStore } from '@stores'
import { RootStackParamList } from '@navigation/Stack'
import { IWishlistBase } from '@types'

import StyledImageBackground from './styles'

export type ProductDetailProps = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>

const ProductDetail = ({ navigation, route }: ProductDetailProps) => {
  const user = useAuthStore((state) => state.user)
  const { id } = route.params
  const { data: product, isSuccess: isFindProductSuccess } = useFindProduct(
    process.env.PRODUCT_ENDPOINT,
    id
  )
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

  const checkProductInWishlist = useMemo(() => {
    if (!isFindProductSuccess) return false
    if (!isGetWishlistSuccess) return false

    return wishlist.some((item: IWishlistBase) => item.productId === product.id)
  }, [isFindProductSuccess, isGetWishlistSuccess, wishlist])

  const likeIcon = checkProductInWishlist
    ? require('@assets/love.png')
    : require('@assets/heart.png')

  const handleLikeProduct = useCallback(() => {
    if (!user) return
    if (checkProductInWishlist) {
      deleteFromWishlist({ id: 1 })
      return
    }

    addToWishList({
      productId: Number(id),
      userId: Number(user.id),
    })
  }, [id, user?.id, checkProductInWishlist])

  const handleBackPress = useCallback(() => navigation.goBack(), [])
  const handlePress = useCallback(() => undefined, [])
  const handleNavigateToCart = useCallback(() => navigation.navigate('Cart'), [])
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

  return isFindProductSuccess ? (
    <>
      <ScrollView
        backgroundColor="$color.bg_layer"
        space="$space.2"
        showsVerticalScrollIndicator={false}
      >
        <YStack>
          <StyledImageBackground source={require('@assets/cart/item.png')}>
            <IconButton icon={require('@assets/back.png')} onPress={handleBackPress} />
            <XStack alignItems="center" space="$space.1.5">
              <IconButton icon={require('@assets/share.png')} onPress={handlePress} />
              <IconButton icon={likeIcon} onPress={handleLikeProduct} />
              <IconButton icon={require('@assets/more.png')} onPress={handlePress} />
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
            <Heading content="$25" fontSize="$3" color="$color.primary" />
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
          <XStack alignItems="center" space="$space.6">
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
      <TabBar title="Add To Cart" onPress={handleNavigateToCart} />
    </>
  ) : (
    <Spinner size="large" color="$color.primary" />
  )
}

export default ProductDetail
