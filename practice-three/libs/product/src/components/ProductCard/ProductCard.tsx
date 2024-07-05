import { Card, CardProps, H2, Image, XStack, getTokenValue } from 'tamagui'
import { StarFull } from '@tamagui/lucide-icons'

import { Text } from '@shared/components'
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
      maxWidth={getTokenValue('$card.width')}
      maxHeight={getTokenValue('$card.height')}
      borderRadius={10}
      overflow="hidden"
      backgroundColor="$white"
      hoverStyle={{
        cursor: 'pointer',
        // @ts-expect-error: Resolve css type not working
        filter: 'brightness(90%)',
      }}
      {...rest}
    >
      <Image
        resizeMode="contain"
        alignSelf="center"
        source={{
          width: getTokenValue('$card.width'),
          height: 300,
          uri: image,
        }}
        defaultSource={{
          width: getTokenValue('$card.width'),
          height: 300,
          uri: placeholderImagePath,
        }}
      />
      <Card.Header paddingHorizontal={21} paddingVertical={10} gap={12}>
        <H2 ellipse color="$black" fontSize="$5" fontWeight="bold">
          {name}
        </H2>
        <XStack gap={30}>
          <Text ellipse color="$black" textTransform="capitalize" fontSize="$3">
            {brandName}
          </Text>
          <XStack gap={3}>
            <Text color="$gray_100" fontSize="$3">
              {rating}
            </Text>
            <StarFull size={18} color="$gray_100" />
          </XStack>
        </XStack>
      </Card.Header>
      <Card.Footer marginHorizontal={21} marginBottom={12}>
        <XStack gap={15} alignItems="center">
          <Text fontSize="$5" fontWeight="bold">
            Rs.{discountPercent ? calculateDiscountPrice(price, discountPercent) : price}
          </Text>
          {discountPercent && (
            <>
              <Text textDecorationLine="line-through" fontSize="$3">
                Rs.{price}
              </Text>
              <Text color="$green_100" fontSize="$3" fontWeight="bold">
                ({discountPercent}% off)
              </Text>
            </>
          )}
        </XStack>
      </Card.Footer>
    </Card>
  )
}

export default ProductCard
