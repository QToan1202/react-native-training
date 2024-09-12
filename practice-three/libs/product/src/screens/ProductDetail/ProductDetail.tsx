import { Fragment, useMemo, useState } from 'react'
import { QueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { LoaderFunctionArgs, useLoaderData, useNavigate } from 'react-router-dom'
import { H2, H4, ScrollView, Stack, styled, XStack, YStack } from 'tamagui'
import { useToastController } from '@tamagui/toast'

import { calculateDiscountPrice, TResolveLoaderReturn } from '@practice-three/shared/util'
import {
  Button,
  IconButton,
  Radio,
  RadioItem,
  Rating,
  Text as BaseText,
  Toast,
  Image,
} from '@practice-three/shared/ui'
import { TOffer, TProduct, TReview, TUser, TWishlistBase } from '@practice-three/shared/types'
import { useAuthStore } from '@practice-three/shared/context'
import { getOffersQuery } from '@practice-three/shared/query'

import {
  findProductQuery,
  getProductsQuery,
  getWishlistQuery,
  useAddToCart,
  useAddToWishlist,
  useDeleteFromWishlist,
} from '../../hooks'
import { Heart, HeartFill, placeholderImagePath, Star } from '../../assets/images'
import { Comment, createTab, ProductCard, Tabs } from '../../components'
import { PRODUCT_SPECIFICATIONS_LABELS } from '../../constants'
import { renderSpecificationItem } from '../../utils'

// Called by router so don't useHook here
export const productLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { id } = params
    const user: TUser | undefined = useAuthStore.getState().user
    await queryClient.ensureQueryData(findProductQuery('/products', id || ''))
    queryClient.ensureQueryData(getProductsQuery('/products'))
    queryClient.ensureQueryData(getWishlistQuery('/wishlists', user?.id || ''))
    queryClient.ensureQueryData(getOffersQuery('/offers'))

    return { id, userId: user?.id }
  }

const Text = styled(BaseText, {
  fontSize: '$3',
})

const ProductDetail = () => {
  const navigate = useNavigate()
  const { id: productId, userId } = useLoaderData() as TResolveLoaderReturn<typeof productLoader>
  const { data: product } = useSuspenseQuery(findProductQuery('/products', productId || ''))
  const { data: similarProducts } = useSuspenseQuery(getProductsQuery('/products'))
  const { data: wishlists } = useSuspenseQuery(getWishlistQuery('/wishlists', userId || ''))
  const { data: offers } = useSuspenseQuery(getOffersQuery('/offers'))
  const [isProductInWishlist, wishlistItem] = useMemo(() => {
    const item = wishlists.find((item: TWishlistBase) => item.productId === productId)
    return [!!item, item]
  }, [productId, wishlists])
  const renderImages = useMemo(
    () =>
      [...Array(4).keys()].map((item) => (
        <Image
          borderRadius={10}
          key={item}
          source={{
            width: 165,
            height: 165,
            uri: product.images[0],
          }}
        />
      )),
    [product.images]
  )
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const toast = useToastController()
  const { mutate: addToWishlist } = useAddToWishlist('/wishlists', userId || '')
  const { mutate: deleteFromWishlist } = useDeleteFromWishlist('/wishlists', userId || '')
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart('/carts', userId || '')
  const handleAddToCart = () => {
    addToCart(
      { id: product.id, size: selectedSize, color: null },
      {
        onSuccess: () => {
          toast.show(`Product have add to cart`, {
            message: `You have successfully added ${product.name} to cart!`,
          })
        },
        onError: (error: Error) => {
          toast.show(`Cannot add this product to cart`, {
            message: error.message
              ? error.message
              : `Can't not add ${product.name} to cart. Reload and try again.`,
          })
        },
      }
    )
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
  const ProductDetailContent = useMemo(
    () => (
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
    ),
    [product.description]
  )
  const [firstCol, secondCol] = renderSpecificationItem(PRODUCT_SPECIFICATIONS_LABELS, product)
  const SpecificationContent = useMemo(
    () => (
      <YStack gap={12}>
        <H4 color="$black" fontSize="$4" fontWeight="bold">
          Specifications
        </H4>
        <XStack gap={12}>
          <YStack>{firstCol}</YStack>
          <YStack>{secondCol}</YStack>
        </XStack>
      </YStack>
    ),
    [firstCol, secondCol]
  )
  const RatingAndReviewContent = useMemo(
    () => (
      <YStack gap={45}>
        <H4 color="$black" fontSize="$4" fontWeight="bold">
          Rating
        </H4>
        <XStack alignItems="center">
          <Text fontSize={48}>{product.rating}</Text>
          <Rating defaultValue={product.rating} icon={<Star fill="black" />} />
        </XStack>
        <Text>
          {product.reviews.length}&nbsp;
          {product.reviews.length >= 2 ? 'Verified Buyers' : 'Verified Buyer'}
        </Text>
        {product.reviews.map(({ date, ...itemProps }: TReview) => (
          <Comment
            key={date.toString()}
            date={date}
            {...itemProps}
            images={[placeholderImagePath]}
          />
        ))}
      </YStack>
    ),
    [product.rating, product.reviews]
  )
  const renderTabs = useMemo(() => {
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
  }, [ProductDetailContent, RatingAndReviewContent, SpecificationContent])
  const handlePressProductCard = (id: string) => navigate(`/product/${id}`)
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
  const renderOffers = useMemo(
    () =>
      offers.map(({ id, name, discountPercentage }: TOffer) => (
        <Fragment key={id}>
          <Text>
            <Text tag="span" fontWeight="bold">
              {name} offer
            </Text>
            &nbsp;get {discountPercentage}&#37; off &nbsp;
            <Text tag="span" color="$primary" hoverStyle={{ textDecorationLine: 'underline' }}>
              T&#38;C
            </Text>
          </Text>
        </Fragment>
      )),
    [offers]
  )
  const handleSelectSize = (value: string) => setSelectedSize(value)

  return (
    <YStack>
      <XStack paddingVertical={25} paddingHorizontal={50} gap={43}>
        <YStack gap={15}>{renderImages}</YStack>
        <Stack flex={2} alignSelf="stretch">
          <Image
            alignSelf="auto"
            flex={1}
            borderRadius={10}
            source={{
              uri: product.images[0],
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
            <Rating defaultValue={product.rating} icon={<Star fill="black" />} isDisabled />
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
            {!!product.discountPercent && (
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
          <Radio onValueChange={handleSelectSize}>
            <XStack gap={16}>
              {product.sizes.map((size: string) => (
                <RadioItem
                  key={size}
                  value={size}
                  width={55}
                  height={55}
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
          {renderOffers}
          <XStack>
            <Button title="add to cart" loading={isAddingToCart} onPress={handleAddToCart} />
            <IconButton onPress={handlePressLikeBtn}>
              {isProductInWishlist ? <HeartFill /> : <Heart />}
            </IconButton>
          </XStack>
        </YStack>
      </XStack>
      {renderTabs}
      <YStack gap={26}>
        <Text fontSize="$6" fontWeight="bold">
          Similar Products
        </Text>
        <ScrollView horizontal>
          <XStack gap={40}>{renderSimilarProducts}</XStack>
        </ScrollView>
      </YStack>
      <YStack gap={26}>
        <Text fontSize="$6" fontWeight="bold">
          Customer Also Like
        </Text>
        <ScrollView horizontal>
          <XStack gap={40}>{renderSimilarProducts}</XStack>
        </ScrollView>
      </YStack>
      <Toast />
    </YStack>
  )
}

export default ProductDetail
