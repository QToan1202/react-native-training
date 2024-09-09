import { Card, CardProps, H2, XStack, getTokenValue } from 'tamagui'
import { StarFull } from '@tamagui/lucide-icons'
import { GestureResponderEvent } from 'react-native'

import { Image, Text } from '@practice-three/components'
import { TProduct } from '@practice-three/types'
import { calculateDiscountPrice } from '@practice-three/utils'

type TOmitProductProps = 'description' | 'sellerName' | 'sizes' | 'reviews' | 'specifications'
export type ProductCardProps = CardProps &
  Omit<TProduct, TOmitProductProps> & {
    onPressCard: (id: string) => void
  }

const ProductCard = ({
  id,
  name,
  brandName,
  images,
  rating,
  price,
  discountPercent,
  onPress,
  onPressCard,
  ...rest
}: ProductCardProps) => {
  const handlePressCardAction = (event: GestureResponderEvent) => {
    onPress?.(event)
    onPressCard?.(id)
  }

  return (
    <Card
      maxWidth={getTokenValue('$card.width')}
      maxHeight={getTokenValue('$card.height')}
      borderRadius={10}
      overflow="hidden"
      backgroundColor="$white"
      animation="slow"
      enterStyle={{
        opacity: 0,
      }}
      hoverStyle={{
        cursor: 'pointer',
        // @ts-expect-error: Resolve css type not working
        filter: 'brightness(90%)',
      }}
      onPress={handlePressCardAction}
      {...rest}
    >
      <Image
        resizeMode="contain"
        source={{
          width: getTokenValue('$card.width'),
          height: 300,
          uri: images[0],
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
          {!!discountPercent && (
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
