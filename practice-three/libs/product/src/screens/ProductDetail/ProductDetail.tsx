import { useMemo } from 'react'
import { QueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { H2, Image, XStack, YStack } from 'tamagui'

import { calculateDiscountPrice, TResolveLoaderReturn } from '@shared/utils'
import { Button, IconButton, Radio, RadioItem, Rating, Text } from '@shared/components'

import { findProductQuery } from '../../hooks'
import { Heart, placeholderImagePath } from '../../assets/images'

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { id } = params
    await queryClient.ensureQueryData(findProductQuery('/products', id || ''))

    return { id }
  }

const ProductDetail = () => {
  const { id } = useLoaderData() as TResolveLoaderReturn<typeof loader>
  const { data: product } = useSuspenseQuery(findProductQuery('/products', id || ''))

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
  const handleAddToCart = () => {
    throw new Error('Function not implement')
  }
  const handleAddToWishlist = () => {
    throw new Error('Function not implement')
  }

  return (
    <XStack paddingVertical={25} paddingHorizontal={50} gap={43}>
      <YStack gap={15}>{renderImages}</YStack>
      <Image
        resizeMode="cover"
        alignSelf="stretch"
        flex={1}
        borderRadius={10}
        source={{
          uri: product.image,
        }}
        defaultSource={{
          uri: placeholderImagePath,
        }}
      />
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
          <IconButton onPress={handleAddToWishlist}>
            <Heart />
          </IconButton>
        </XStack>
      </YStack>
    </XStack>
  )
}

export default ProductDetail
