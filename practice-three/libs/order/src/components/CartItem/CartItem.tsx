import { memo, useCallback, useState } from 'react'
import { AnimatePresence, Heading, XStack, XStackProps, YStack, getTokenValue } from 'tamagui'
import { GestureResponderEvent, ImageURISource } from 'react-native'
import isEqual from 'react-fast-compare'

import { TProduct } from '@practice-three/shared/types'
import { AlertDialog, IconButton, Image, Text } from '@practice-three/shared/ui'
import { useAuthStore } from '@practice-three/shared/context'
import { ENDPOINTS } from '@practice-three/shared/constant'

import { Heart, Trash } from '../../assets/images'
import { Counter } from '../Counter'
import { useDeleteCartItem } from '../../hooks'

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
  quantity,
  isLiked = false,
  onPressItem,
  onPress,
  ...rest
}: CartItemProps) => {
  const user = useAuthStore((state) => state.user)
  const handlePressItemAction = (event: GestureResponderEvent) => {
    onPress?.(event)
    onPressItem?.(id)
  }
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { mutate: removeItemFromCart } = useDeleteCartItem(ENDPOINTS.CART, user?.id || '')
  const handleCancelAlert = () => {
    setIsOpen(false)
  }
  const handleSuccessAlert = () => {
    handleCancelAlert()
    removeItemFromCart(id)
  }
  const handlePressDeleteIcon = useCallback(() => {
    setIsOpen(true)
  }, [])

  return (
    <XStack
      borderRadius={5}
      borderWidth={1}
      borderColor="$pale"
      padding={16}
      onPress={handlePressItemAction}
      {...rest}
    >
      <XStack flex={1}>
        <Image
          borderRadius={5}
          source={{
            width: getTokenValue('$cartItem.width'),
            height: getTokenValue('$cartItem.height'),
            uri: image,
          }}
        />
        <YStack marginLeft={12} flex={1}>
          <XStack flex={1} alignItems="flex-start" justifyContent="space-between">
            <Heading
              numberOfLines={2}
              ellipsizeMode="tail"
              maxWidth={125}
              color="$black"
              fontSize="$1"
              fontWeight="700"
              textTransform="capitalize"
            >
              {name}
            </Heading>
            <XStack>
              <IconButton paddingVertical={0}>{isLiked ? <HeartFill /> : <Heart />}</IconButton>
              <IconButton paddingVertical={0} onPress={handlePressDeleteIcon}>
                <Trash />
              </IconButton>
            </XStack>
          </XStack>
          <XStack flex={1} alignItems="flex-end" justifyContent="space-between">
            <Text color="$primary" fontWeight="700">
              ${price.toFixed(2)}
            </Text>
            <Counter productId={id} defaultValue={quantity} />
          </XStack>
        </YStack>
      </XStack>

      <AnimatePresence>
        {isOpen && (
          <AlertDialog
            title="Remove product"
            open={isOpen}
            description="Are you sure you want to delete this item from your cart? This action cannot be undone."
            onCancel={handleCancelAlert}
            onSuccess={handleSuccessAlert}
          />
        )}
      </AnimatePresence>
    </XStack>
  )
}

export default memo(CartItem, isEqual)
