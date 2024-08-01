import { memo } from 'react'
import { Heading, XStack, XStackProps, YStack, getTokenValue } from 'tamagui'
import { GestureResponderEvent, ImageURISource } from 'react-native'
import isEqual from 'react-fast-compare'

import { TProduct } from '@shared/types'
import { IconButton, Image, Text } from '@shared/components'

import { Heart, Trash } from '../../assets/images'
import { Counter } from '../Counter'

type TCartItem = 'id' | 'name' | 'price'
export type CartItemProps = XStackProps &
  Pick<TProduct, TCartItem> & {
    image: ImageURISource['uri']
    quantity: number
    isLiked?: boolean
    onPressItem?: (id: string) => void
  }

const HeartFill = () => (
  <Heart fill={getTokenValue('$color.red_50')} stroke={getTokenValue('$color.red_50')} />
)

const CartItem = ({
  id,
  image,
  name,
  price,
  isLiked = false,
  quantity,
  onPressItem,
  onPress,
  ...rest
}: CartItemProps) => {
  const handlePressItemAction = (event: GestureResponderEvent) => {
    onPress?.(event)
    onPressItem?.(id)
  }

  return (
    <XStack
      borderRadius={5}
      borderWidth={1}
      borderColor="$pale"
      padding={16}
      justifyContent="space-between"
      onPress={handlePressItemAction}
      {...rest}
    >
      <XStack>
        <Image
          borderRadius={5}
          source={{
            width: getTokenValue('$cartItem.width'),
            height: getTokenValue('$cartItem.height'),
            uri: image,
          }}
        />
        <YStack gap={8} marginLeft={18} justifyContent="space-evenly">
          <Heading ellipse color="$black" fontSize="$1" fontWeight="700" textTransform="capitalize">
            {name}
          </Heading>
          <Text color="$primary" fontWeight="700">
            ${price.toFixed(2)}
          </Text>
        </YStack>
      </XStack>
      <YStack gap={8} alignSelf="flex-end" justifyContent="space-evenly">
        <XStack justifyContent="flex-end">
          <IconButton>{isLiked ? <HeartFill /> : <Heart />}</IconButton>
          <IconButton>
            <Trash />
          </IconButton>
        </XStack>
        <Counter productId={id} defaultValue={quantity} />
      </YStack>
    </XStack>
  )
}

export default memo(CartItem, isEqual)
