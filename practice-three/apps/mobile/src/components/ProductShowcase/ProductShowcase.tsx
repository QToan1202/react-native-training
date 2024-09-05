import { Fragment } from 'react'
import { Heading, XStack, YStack } from 'tamagui'

import { Button, Image, Text } from '@practice-three/components'
import { TProduct } from '@practice-three/types'
import { calculateDiscountPrice } from '@practice-three/utils'

import { ProductBag, ProductHeart } from '../../assets/images'

type TRemoveProps = 'description' | 'sellerName' | 'sizes' | 'reviews' | 'specifications' | 'rating'
type ProductShowcaseProps = Omit<TProduct, TRemoveProps>

const ProductShowcase = ({
  images,
  name,
  brandName,
  discountPercent,
  price,
}: ProductShowcaseProps) => {
  const [mainImage, ...otherImages] = images

  return (
    <YStack>
      <XStack gap={8}>
        <Image flex={2} width="100%" source={{ uri: mainImage, height: 200 }} borderRadius={8} />
        <YStack flex={1} justifyContent="space-between" gap={10}>
          {otherImages.slice(0, 2).map((image, index) => (
            <Fragment key={index}>
              <Image flex={1} width="100%" borderRadius={8} source={{ uri: image, height: 95 }} />
              {otherImages.length > 2 && (
                <YStack
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  height={95}
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={8}
                  backgroundColor="$imageOverlay"
                >
                  <Text color="$pure_white" fontSize="$6" fontWeight="700">
                    + {otherImages.length - 2}
                  </Text>
                </YStack>
              )}
            </Fragment>
          ))}
        </YStack>
      </XStack>
      <YStack gap={0}>
        <Heading ellipse color="$black" fontSize="$4" fontWeight="500">
          {name}
        </Heading>
        <Text fontSize="$3">{brandName}</Text>
        <XStack alignItems="center" gap={14}>
          {!!discountPercent && (
            <Text textDecorationLine="line-through" fontSize="$1">
              Rs.{price}
            </Text>
          )}
          <Text fontSize="$4">
            Rs.
            {discountPercent ? calculateDiscountPrice(price, discountPercent) : price}
          </Text>
          {!!discountPercent && (
            <Text color="$green_50" fontSize="$1">
              ({discountPercent}% off)
            </Text>
          )}
        </XStack>
      </YStack>
      <XStack justifyContent="space-between" alignItems="center" gap={12}>
        <Button
          variant="outlined"
          borderRadius={10}
          gap={22}
          paddingVertical={10}
          paddingHorizontal={48}
          title="wishlist"
          endIcon={<ProductHeart width={15} height={17} />}
        />
        <Button
          borderRadius={10}
          gap={22}
          paddingVertical={10}
          paddingHorizontal={36}
          title="add to bag"
          endIcon={<ProductBag />}
        />
      </XStack>
    </YStack>
  )
}

export default ProductShowcase
