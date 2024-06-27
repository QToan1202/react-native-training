import { Card, CardProps, Image, XStack, getTokenValue } from 'tamagui'

import { Heading, Text } from '@shared/components'
import { TProduct } from '@shared/types'
import { calculateDiscountPrice } from '@shared/utils'

import { placeholderImagePath } from '../../assets/images'

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
  image,
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
        alignSelf="center"
        borderRadius={10}
        source={{
          width: getTokenValue('$cardMobile.width'),
          height: 250,
          uri: image,
        }}
        defaultSource={{
          width: getTokenValue('$cardMobile.width'),
          height: 250,
          uri: placeholderImagePath,
        }}
      />
      <Card.Header paddingHorizontal={6} paddingVertical={9}>
        <Heading
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          color="$black"
          fontWeight="bold"
        >
          {name}
        </Heading>
        <XStack gap={30}>
          <Text color="$black" textTransform="capitalize" fontSize="$1">
            {brandName}
          </Text>
        </XStack>
      </Card.Header>
      <Card.Footer marginHorizontal={6} marginBottom={4}>
        <XStack gap={15} alignItems="center">
          {discountPercent && (
            <Text textDecorationLine="line-through" fontSize="$1">
              Rs.{price}
            </Text>
          )}
          <Text>Rs.{discountPercent ? calculateDiscountPrice(price, discountPercent) : price}</Text>
          {discountPercent && (
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
