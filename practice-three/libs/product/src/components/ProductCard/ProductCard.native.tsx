import { Card, CardProps, XStack, getTokenValue } from 'tamagui'

import { Heading, Image, Text } from '@practice-three/components'
import { TProduct } from '@practice-three/types'
import { calculateDiscountPrice } from '@practice-three/utils'

type TOmitProductProps =
  | 'id'
  | 'description'
  | 'sellerName'
  | 'sizes'
  | 'reviews'
  | 'specifications'
export type ProductCardProps = CardProps & Omit<TProduct, TOmitProductProps>

const ProductCard = ({
  name,
  brandName,
  images,
  rating,
  price,
  discountPercent,
  ...rest
}: ProductCardProps) => {
  return (
    <Card
      maxWidth={getTokenValue('$cardMobile.width')}
      maxHeight={getTokenValue('$cardMobile.height')}
      borderRadius={10}
      backgroundColor="$white"
      pressStyle={{
        opacity: 0.85,
      }}
      $platform-android={{
        elevation: 5,
      }}
      $platform-ios={{
        shadowColor: '$black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }}
      {...rest}
    >
      <Image
        resizeMode="contain"
        borderRadius={10}
        source={{
          width: getTokenValue('$cardMobile.width'),
          height: 250,
          uri: images[0],
        }}
      />
      <Card.Header paddingHorizontal={6} paddingVertical={9}>
        <Heading ellipse color="$black" fontWeight="bold">
          {name}
        </Heading>
        <XStack gap={30}>
          <Text ellipse color="$black" textTransform="capitalize" fontSize="$1">
            {brandName}
          </Text>
        </XStack>
      </Card.Header>
      <Card.Footer marginHorizontal={6} marginBottom={4}>
        <XStack gap={15} alignItems="center">
          {!!discountPercent && (
            <Text textDecorationLine="line-through" fontSize="$1">
              Rs.{price}
            </Text>
          )}
          <Text>Rs.{discountPercent ? calculateDiscountPrice(price, discountPercent) : price}</Text>
          {!!discountPercent && (
            <Text color="$green_50" fontSize="$1">
              ({discountPercent}% off)
            </Text>
          )}
        </XStack>
      </Card.Footer>
    </Card>
  )
}

export default ProductCard
