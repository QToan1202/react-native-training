import { useQuery } from '@tanstack/react-query'
import { getTokenValue, ScrollView, Separator, XStack, YStack } from 'tamagui'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useToastController } from '@tamagui/toast'

import {
  Accordion,
  AccordionItem,
  Button,
  Carousel,
  Heading,
  Image,
  Input,
  Radio,
  RadioItem,
  Rating,
  Text,
} from '@practice-three/shared/ui'
import { calculateDiscountPrice } from '@practice-three/shared/util'
import { getOffersQuery } from '@practice-three/shared/query'
import {
  ProductTabScreenProps,
  TOffer,
  TProduct,
  TReview,
  TWishlistBase,
} from '@practice-three/shared/types'
import { useAuthStore } from '@practice-three/shared/context'
import { ENDPOINTS } from '@practice-three/shared/constant'

import {
  findProductQuery,
  getProductsQuery,
  getWishlistQuery,
  useAddToCart,
  useAddToWishlist,
  useDeleteFromWishlist,
} from '../../hooks'
import { Bag, Heart, Share, Star } from '../../assets/images'
import { PRODUCT_LABELS, PRODUCT_SPECIFICATIONS_LABELS } from '../../constants'
import { renderSpecificationItem } from '../../utils'
import { Comment, ProductCard } from '../../components'

export type ProductDetailScreenProps = ProductTabScreenProps<'ProductDetail'>

const ProductDetail = ({ navigation, route }: ProductDetailScreenProps) => {
  const productId = route.params.id
  const user = useAuthStore((state) => state.user)
  const {
    data: product,
    isPending: isGetProductDetail,
    error: errorWhenGetProduct,
  } = useQuery(findProductQuery(ENDPOINTS.PRODUCT, productId))
  const { data: similarProducts, isSuccess: isGetProductsSuccess } = useQuery(
    getProductsQuery(ENDPOINTS.PRODUCT)
  )
  const { data: offers, isSuccess: isGetOfferSuccess } = useQuery(getOffersQuery(ENDPOINTS.OFFER))
  const { data: wishlists, isSuccess: isGetWishlistSuccess } = useQuery(
    getWishlistQuery(ENDPOINTS.WISHLIST, user?.id || '')
  )
  const [isProductInWishlist, wishlistItem] = useMemo(() => {
    if (!isGetWishlistSuccess) return []

    const item = wishlists.find((item: TWishlistBase) => item.productId === productId)
    return [!!item, item]
  }, [isGetWishlistSuccess, productId, wishlists])
  const { mutate: addToWishlist } = useAddToWishlist(ENDPOINTS.WISHLIST, user?.id || '')
  const { mutate: deleteFromWishlist } = useDeleteFromWishlist(ENDPOINTS.WISHLIST, user?.id || '')
  const toast = useToastController()
  const { control } = useForm<{
    pinCode: string
  }>({
    defaultValues: {
      pinCode: '',
    },
  })
  const renderOffers = useMemo(() => {
    if (!isGetOfferSuccess) return

    return offers.map(({ id, name, discountPercentage }: TOffer) => (
      <XStack key={id} gap={10}>
        <Text>
          {name} offer get {discountPercentage}&#37; off
        </Text>
        <Text color="$primary" hoverStyle={{ textDecorationLine: 'underline' }}>
          T&#38;C
        </Text>
      </XStack>
    ))
  }, [isGetOfferSuccess, offers])
  const handlePressProductCard = useCallback(
    (id: string) => navigation.navigate('ProductDetail', { id }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const renderSimilarProducts = useMemo(() => {
    if (!isGetProductsSuccess) return
    if (!similarProducts.length)
      return (
        <YStack alignItems="center" gap={12} fullscreen>
          <Heading color="$black" fontSize="$5" fontWeight="bold" textAlign="center">
            No Products Found
          </Heading>
          <Text>We couldn't find any products that match your search.</Text>
        </YStack>
      )

    return similarProducts.map(
      ({ description, sellerName, sizes, reviews, specifications, id, ...rest }: TProduct) => (
        <ProductCard key={id} id={id} {...rest} onPressCard={handlePressProductCard} />
      )
    )
  }, [handlePressProductCard, isGetProductsSuccess, similarProducts])
  const renderProducts = useCallback(
    (title: string) => (
      <YStack gap={8}>
        <Text fontSize="$3" fontWeight="500" textTransform="capitalize">
          {title}
        </Text>
        <ScrollView horizontal contentContainerStyle={{ padding: 7 }}>
          <XStack gap={6}>{renderSimilarProducts}</XStack>
        </ScrollView>
      </YStack>
    ),
    [renderSimilarProducts]
  )
  const { mutate: addToCart } = useAddToCart(ENDPOINTS.CART, user?.id || '')
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const handleAddToCart = () => {
    addToCart(
      { id: productId, color: null, size: selectedSize },
      {
        onSuccess: () => {
          toast.show(`Product have add to cart`, {
            message: `You have successfully added ${product?.name} to cart!`,
          })
        },
        onError: (error) => {
          toast.show(`Something went wrong`, {
            message:
              error.message || `Can't not add ${product?.name} to cart. Reload and try again.`,
          })
        },
      }
    )
  }
  if (isGetProductDetail) return <Text>Loading...</Text>
  if (errorWhenGetProduct) return <Text>An error has occurred: {errorWhenGetProduct.message}</Text>

  const handlePressWishlistBtn = () => {
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
  const [firstCol, secondCol] = renderSpecificationItem(PRODUCT_SPECIFICATIONS_LABELS, product)
  const renderProductContent = (label: string) => {
    switch (label) {
      case 'product details':
        return <Text>{product.description}</Text>

      case 'specification':
        return (
          <XStack gap={55}>
            <YStack>{firstCol}</YStack>
            <YStack>{secondCol}</YStack>
          </XStack>
        )

      case 'ratings & reviews':
        return (
          <YStack gap={15}>
            <XStack alignItems="center" gap={16}>
              <Text fontSize={28}>{product.rating}</Text>
              <Rating
                size="$7"
                defaultValue={product.rating}
                icon={<Star fill="black" />}
                isDisabled
              />
            </XStack>
            <Text color="$gray_100">
              {product.reviews.length}{' '}
              {product.reviews.length >= 2 ? 'Verified Buyers' : 'Verified Buyer'}
            </Text>
            {product.reviews.map(({ date, ...itemProps }: TReview) => (
              <Comment
                key={date.toString()}
                date={date}
                {...itemProps}
                images={[
                  'https://picsum.photos/500/300',
                  'https://picsum.photos/501/300',
                  'https://picsum.photos/502/300',
                  'https://images.dog.ceo/breeds/husky/n02110185_14479.jpg',
                  'https://images.dog.ceo/breeds/setter-english/n02100735_4040.jpg',
                ]}
              />
            ))}
          </YStack>
        )

      case 'how this was made':
        return (
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus
            diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam,
            metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit.
            Quis venenatis, neque arcu
          </Text>
        )

      case 'manufacturing information':
        return (
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus
            diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam,
            metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit.
            Quis venenatis, neque arcu
          </Text>
        )

      default:
        return null
    }
  }
  const handleSelectSize = (value: string) => setSelectedSize(value)

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          gap: 15,
          paddingHorizontal: 20,
          paddingBottom: getTokenValue('$bottomTabBar.height'),
          backgroundColor: '$pure_white',
        }}
      >
        <YStack marginHorizontal={-20}>
          <Carousel
            data={product.images}
            renderItem={({ item: imageLink }) => (
              <Image source={{ uri: imageLink, width: 400, height: 600 }} />
            )}
          />
        </YStack>
        <XStack justifyContent="space-between">
          <YStack gap={6}>
            <Heading color="$black" fontSize="$4" fontWeight="500">
              {product.name}
            </Heading>
            <Text fontSize="$3">{product.brandName}</Text>
            <XStack alignItems="center" gap={14}>
              {!!product.discountPercent && (
                <Text textDecorationLine="line-through" fontSize="$1">
                  Rs.{product.price}
                </Text>
              )}
              <Text fontSize="$3">
                Rs.
                {product.discountPercent
                  ? calculateDiscountPrice(product.price, product.discountPercent)
                  : product.price}
              </Text>
              {!!product.discountPercent && (
                <Text color="$green_50" fontSize="$1">
                  ({product.discountPercent}% off)
                </Text>
              )}
            </XStack>
          </YStack>
          <Share />
        </XStack>
        <YStack>
          <Heading color="black" fontSize="$3">
            Color
          </Heading>
        </YStack>
        <XStack justifyContent="space-between">
          <YStack gap={6}>
            <Heading color="black" fontSize="$3" fontWeight="500">
              Select Size
            </Heading>
            <Radio onValueChange={handleSelectSize}>
              <XStack gap={16}>
                {product.sizes.map((size: string) => (
                  <RadioItem
                    key={size}
                    value={size}
                    width={40}
                    height={40}
                    borderRadius={0}
                    backgroundColor="$pure_white"
                    elevation={1}
                  >
                    <Text>{size}</Text>
                  </RadioItem>
                ))}
              </XStack>
            </Radio>
          </YStack>
          <Text color="$primary" fontSize="$1">
            Size Chart
          </Text>
        </XStack>
        <YStack gap={6}>
          <Heading color="black" fontSize="$3" fontWeight="500">
            Best Offers
          </Heading>
          {renderOffers}
        </YStack>
        <YStack gap={6}>
          <Heading color="black" fontSize="$3" fontWeight="500">
            Delivery Details
          </Heading>
          <Controller
            name="pinCode"
            control={control}
            render={({ field: { value, onBlur, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Enter Pincode"
                placeholderTextColor="$black"
                paddingHorizontal={22}
                endIcon={<Button title="Check" variant="text" color="$white" />}
                containerStyle={{
                  borderRadius: 10,
                  maxWidth: 300,
                }}
              />
            )}
          />
        </YStack>
        <Accordion type="multiple">
          {PRODUCT_LABELS.map((label: string) => (
            <Fragment key={label}>
              <Separator borderColor="$separate" marginVertical={20} />
              <AccordionItem
                label={
                  <Text ellipse fontSize="$3" fontWeight="500" textTransform="capitalize">
                    {label}
                  </Text>
                }
                padding={5}
                borderWidth={0}
                backgroundColor="$transparent"
                focusStyle={{
                  backgroundColor: '$transparent',
                }}
                hoverStyle={{
                  backgroundColor: '$transparent',
                }}
              >
                {renderProductContent(label)}
              </AccordionItem>
            </Fragment>
          ))}
        </Accordion>
        {renderProducts('similar products')}
        {renderProducts('customer also like')}
      </ScrollView>
      <XStack
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height={getTokenValue('$bottomTabBar.height')}
        justifyContent="center"
        alignItems="center"
        backgroundColor="$pure_white"
        gap={12}
      >
        <Button
          gap={22}
          paddingVertical={10}
          paddingHorizontal={48}
          variant="outlined"
          title="wishlist"
          endIcon={<Heart width={15} height={17} />}
          onPress={handlePressWishlistBtn}
        />
        <Button
          gap={22}
          paddingVertical={10}
          paddingHorizontal={36}
          title="add to bag"
          endIcon={<Bag />}
          onPress={handleAddToCart}
        />
      </XStack>
    </>
  )
}

export default ProductDetail
