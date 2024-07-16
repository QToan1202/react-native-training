import { useCallback, useMemo } from 'react'
import { QueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { LoaderFunctionArgs, redirect, useLoaderData } from 'react-router-dom'
import { H2, H4, Image, ScrollView, Separator, Stack, styled, XStack, YStack } from 'tamagui'

import { calculateDiscountPrice, TResolveLoaderReturn } from '@shared/utils'
import {
  Button,
  IconButton,
  Radio,
  RadioItem,
  Rating,
  Text as BaseText,
  Toast,
} from '@shared/components'
import { TProduct, TProductSpecification, TReview, TUser, TWishlistBase } from '@shared/types'
import { useAuthStore } from '@shared/stores'

import {
  findProductQuery,
  getProductsQuery,
  getWishlistQuery,
  useAddToWishlist,
  useDeleteFromWishlist,
} from '../../hooks'
import { Heart, HeartFill, placeholderImagePath } from '../../assets/images'
import { Comment, createTab, ProductCard, Tabs } from '../../components'
import { useToastController } from '@tamagui/toast'
import { PRODUCT_SPECIFICATIONS_LABELS } from '../../constants'

// Called by router so don't useHook here
export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { id } = params
    const user: TUser | undefined = useAuthStore.getState().user
    await queryClient.ensureQueryData(findProductQuery('/products', id || ''))
    queryClient.ensureQueryData(getProductsQuery('/products'))
    queryClient.ensureQueryData(getWishlistQuery('/wishlists', user?.id || ''))

    return { id, userId: user?.id }
  }

const Text = styled(BaseText, {
  fontSize: '$3',
})

const ProductDetail = () => {
  const { id: productId, userId } = useLoaderData() as TResolveLoaderReturn<typeof loader>
  const { data: product } = useSuspenseQuery(findProductQuery('/products', productId || ''))
  const { data: similarProducts } = useSuspenseQuery(getProductsQuery('/products'))
  const { data: wishlists } = useSuspenseQuery(getWishlistQuery('/wishlists', userId || ''))
  const [isProductInWishlist, wishlistItem] = useMemo(() => {
    const item = wishlists.find((item: TWishlistBase) => item.productId === productId)
    return [!!item, item]
  }, [productId, wishlists])
  const renderImages = useMemo(
    () =>
      [...Array(4).keys()].map((item) => (
        <Image
          resizeMode="cover"
          alignSelf="center"
          borderRadius={10}
          key={item}
          source={{
            width: 165,
            height: 165,
            uri: product.image,
          }}
          defaultSource={{
            width: 180,
            height: 180,
            uri: placeholderImagePath,
          }}
        />
      )),
    [product.image]
  )
  const toast = useToastController()
  const { mutate: addToWishlist } = useAddToWishlist('/wishlists', userId || '')
  const { mutate: deleteFromWishlist } = useDeleteFromWishlist('/wishlists', userId || '')
  const handleAddToCart = () => {
    throw new Error('Function not implement')
  }
  const handlePressLikeBtn = () => {
    if (!isProductInWishlist)
      return addToWishlist(
        { productId },
        {
          onSuccess: () => {
            toast.show(`Product have add to wishlist`, {
              message: `You have successfully added ${product.name} to wishlist!`,
            })
          },
        }
      )

    return deleteFromWishlist(
      { id: wishlistItem?.id },
      {
        onSuccess: () => {
          toast.show(`Product have remove from wishlist`, {
            message: `You have successfully removed ${product.name} from wishlist!`,
          })
        },
      }
    )
  }
  const ProductDetailContent = (
    <YStack gap={26}>
      <YStack gap={12}>
        <H4 color="$black" fontSize="$4" fontWeight="bold">
          Product Details
        </H4>
        <Text>{product.description}</Text>
      </YStack>
      <YStack gap={12}>
        <H4 color="$black" fontSize="$4" fontWeight="bold">
          Size &#38; Fit
        </H4>
        <Text>The model (height 5&#39;8&#34;) is wearing a size S</Text>
      </YStack>
      <YStack gap={12}>
        <H4 color="$black" fontSize="$4" fontWeight="bold">
          Material &#38; Care
        </H4>
        <Text>100% cotton</Text>
        <Text>Machine Wash</Text>
      </YStack>
    </YStack>
  )
  const renderSpecificationItem = useCallback(
    (labels: Record<string, string>) => {
      const target = Object.keys(labels) as (keyof TProductSpecification)[]
      const middleIndex = Math.ceil(target.length / 2)
      const [firstHalf, secondHalf] = [target.slice(0, middleIndex), target.slice(middleIndex)]
      const renderCol = (arr: (keyof TProductSpecification)[]) =>
        arr.map((item: keyof TProductSpecification) => (
          <YStack gap={10} key={item}>
            <Text color="$gray_100">{labels[item]}</Text>
            <Text>{product.specifications[item]}</Text>
            <Separator alignSelf="stretch" />
          </YStack>
        ))

      return [renderCol(firstHalf), renderCol(secondHalf)]
    },
    [product.specifications]
  )
  const [firstCol, secondCol] = renderSpecificationItem(PRODUCT_SPECIFICATIONS_LABELS)
  const SpecificationContent = (
    <YStack gap={12}>
      <H4 color="$black" fontSize="$4" fontWeight="bold">
        Specifications
      </H4>
      <XStack gap={12}>
        {firstCol}
        {secondCol}
      </XStack>
    </YStack>
  )
  const RatingAndReviewContent = (
    <YStack gap={45}>
      <H4 color="$black" fontSize="$4" fontWeight="bold">
        Rating
      </H4>
      <XStack alignItems="center">
        <Text fontSize={48}>{product.rating}</Text>
        <Rating defaultValue={product.rating} numberOfStarts={5} color="$black" isDisabled />
      </XStack>
      <Text>{product.reviews.length > 2 ? 'Verified Buyers' : 'Verified Buyer'} </Text>
      {product.reviews.map(({ date, ...itemProps }: TReview) => (
        <Comment key={date.toString()} date={date} {...itemProps} images={[placeholderImagePath]} />
      ))}
    </YStack>
  )
  const renderTabs = () => {
    const [ProductHeader, ProductContent] = createTab(
      'product',
      'Product Details',
      ProductDetailContent
    )
    const [SpecHeader, SpecContent] = createTab('spec', 'Specifications', SpecificationContent)
    const [RatingHeader, RatingContent] = createTab(
      'rating',
      'Ratings & Reviews',
      RatingAndReviewContent
    )

    return (
      <Tabs
        defaultValue="product"
        padding={20}
        $sm={{ paddingHorizontal: 30 }}
        $md={{ paddingHorizontal: 50 }}
        $xl={{ paddingHorizontal: 200 }}
        renderTitle={() => (
          <>
            <ProductHeader />
            <SpecHeader />
            <RatingHeader />
          </>
        )}
        renderContent={() => (
          <>
            <ProductContent alignItems="flex-start" />
            <SpecContent alignItems="flex-start" />
            <RatingContent alignItems="flex-start" />
          </>
        )}
      />
    )
  }
  const handlePressProductCard = (id: string) => {
    redirect(`/product/${id}`)
  }
  const renderSimilarProducts = useMemo(() => {
    if (!similarProducts.length)
      return (
        <YStack alignItems="center" gap={12} fullscreen>
          <H2 color="$black" fontSize="$5" fontWeight="bold" textAlign="center">
            No Products Found
          </H2>
          <Text>We couldn't find any products that match your search.</Text>
        </YStack>
      )

    return similarProducts.map(
      ({ description, sellerName, sizes, reviews, specifications, id, ...rest }: TProduct) => (
        <ProductCard key={id} id={id} {...rest} onPressCard={handlePressProductCard} />
      )
    )
  }, [similarProducts])

  return (
    <YStack>
      <XStack paddingVertical={25} paddingHorizontal={50} gap={43}>
        <YStack gap={15}>{renderImages}</YStack>
        <Stack flex={1} alignSelf="stretch">
          <Image
            resizeMode="cover"
            alignSelf="auto"
            flex={1}
            borderRadius={10}
            source={{
              uri: product.image,
            }}
            defaultSource={{
              uri: placeholderImagePath,
            }}
          />
        </Stack>
        <YStack flex={1} alignSelf="flex-start" gap={24}>
          <H2 ellipse fontSize="$6" fontWeight="bold" color="$black">
            {product.name}
          </H2>
          <Text ellipse fontSize="$5">
            {product.brandName}
          </Text>
          <Text ellipse fontSize="$3">
            Sold By: {product.sellerName}
          </Text>
          <XStack gap={12} alignItems="center">
            <Rating numberOfStarts={5} defaultValue={product.rating} color="$black" isDisabled />
            <Text fontSize="$3">{product.rating}</Text>
            <Text marginLeft={10} fontSize="$3">
              {product.reviews.length} Reviews
            </Text>
          </XStack>
          <XStack gap={15} alignItems="center">
            <Text fontSize="$5" fontWeight="bold">
              Rs.
              {product.discountPercent
                ? calculateDiscountPrice(product.price, product.discountPercent)
                : product.price}
            </Text>
            {product.discountPercent && (
              <>
                <Text textDecorationLine="line-through" fontSize="$3">
                  Rs.{product.price}
                </Text>
                <Text color="$green_100" fontSize="$5" fontWeight="bold">
                  ({product.discountPercent}% off)
                </Text>
              </>
            )}
          </XStack>
          <Text fontSize="$5" fontWeight="bold" textTransform="capitalize">
            select size
          </Text>
          <Text fontSize="$3" color="$blue_200" cursor="pointer" textTransform="capitalize">
            size chart &#8250;
          </Text>
          <Radio>
            <XStack gap={16}>
              {product.sizes.map((size: string) => (
                <RadioItem
                  key={size}
                  value={size}
                  padding={18}
                  borderWidth={1}
                  borderColor="$gray_400"
                  backgroundColor="$transparent"
                >
                  <Text>{size}</Text>
                </RadioItem>
              ))}
            </XStack>
          </Radio>
          <Text fontSize="$5" fontWeight="bold" textTransform="capitalize">
            select color
          </Text>
          <Text fontSize="$5" fontWeight="bold" textTransform="capitalize">
            best offers
          </Text>
          <XStack>
            <Button title="add to cart" onPress={handleAddToCart} />
            <IconButton onPress={handlePressLikeBtn}>
              {isProductInWishlist ? <HeartFill /> : <Heart />}
            </IconButton>
          </XStack>
        </YStack>
      </XStack>
      {renderTabs()}
      <YStack gap={26}>
        <Text fontSize="$6" fontWeight="bold">
          Similar Products
        </Text>
        <ScrollView horizontal scrollbarWidth="thin">
          <XStack gap={40}>{renderSimilarProducts}</XStack>
        </ScrollView>
      </YStack>
      <YStack gap={26}>
        <Text fontSize="$6" fontWeight="bold">
          Customer Also Like
        </Text>
        <ScrollView horizontal scrollbarWidth="thin">
          <XStack gap={40}>{renderSimilarProducts}</XStack>
        </ScrollView>
      </YStack>
      <Toast />
    </YStack>
  )
}

export default ProductDetail
