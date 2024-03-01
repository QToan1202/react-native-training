import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { ImageSourcePropType } from 'react-native'
import { XStack, XStackProps, YStack } from 'tamagui'

import { Paragraph, calculateDiscount } from '@practice-two/shared'

import { StyledImage, StyledText } from './styles'

export type CartItemProps = XStackProps & {
  image: ImageSourcePropType
  name: string
  price: number
  discountPrice?: number
  quantity: number
}

const CartItem = ({ image, name, price, discountPrice, quantity, ...rest }: CartItemProps) => {
  return (
    <XStack
      paddingTop={29}
      paddingLeft="$space.3.5"
      paddingBottom="$space.3"
      backgroundColor="$color.white"
      pressStyle={{ opacity: 0.5 }}
      {...rest}
    >
      <XStack space="$space.3.5">
        <StyledImage source={image} />
        <YStack space="$space.3" justifyContent="center">
          <StyledText content={name} />
          <XStack alignItems="center" columnGap="$space.1.5">
            <Paragraph
              content={`$${discountPrice ? discountPrice.toFixed(0) : price.toFixed(0)}`}
              fontWeight="$4"
              fontSize="$3"
              lineHeight="$4"
              color="$color.primary"
              numberOfLines={1}
            />
            {discountPrice !== 0 && (
              <>
                <StyledText
                  content={`$${price.toFixed(0)}`}
                  textDecorationLine="line-through"
                  numberOfLines={1}
                />
                <StyledText content={calculateDiscount(price, discountPrice)} numberOfLines={1} />
              </>
            )}
          </XStack>
          <StyledText content={`qty: ${quantity}`} />
        </YStack>
      </XStack>
    </XStack>
  )
}

export default memo(CartItem, isEqual)
