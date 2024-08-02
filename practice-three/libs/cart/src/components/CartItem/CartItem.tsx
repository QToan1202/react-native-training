import { memo, useCallback, useContext, useMemo, useState } from 'react'
import { Heading, XStack, XStackProps, YStack, getTokenValue } from 'tamagui'
import { GestureResponderEvent, ImageURISource } from 'react-native'
import isEqual from 'react-fast-compare'
import { useStore } from 'zustand'

import { TProduct } from '@shared/types'
import { AlertDialog, IconButton, Image, Text } from '@shared/components'
import { useAuthStore } from '@shared/contexts'

import { Heart, Trash } from '../../assets/images'
import { Counter } from '../Counter'
import { CartContext } from '../../context'
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
  const store = useContext(CartContext)
  const remove = useStore(store, (state) => state.remove)
  const { mutate: removeItemFromCart } = useDeleteCartItem('/carts', user?.id || '')
  const handleCancelAlert = () => {
    setIsOpen(false)
  }
  const handleSuccessAlert = () => {
    handleCancelAlert()
    removeItemFromCart(id, {
      onSuccess: () => remove(id),
    })
  }
  const handlePressDeleteIcon = useCallback(() => {
    setIsOpen(true)
  }, [])
  const renderContent = useMemo(
    () => (
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
    ),
    [image, name, price]
  )
  const renderIcons = useMemo(
    () => (
      <XStack justifyContent="flex-end">
        <IconButton>{isLiked ? <HeartFill /> : <Heart />}</IconButton>
        <IconButton onPress={handlePressDeleteIcon}>
          <Trash />
        </IconButton>
      </XStack>
    ),
    [isLiked, handlePressDeleteIcon]
  )

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
      {renderContent}
      <YStack gap={8} alignSelf="flex-end" justifyContent="space-evenly">
        {renderIcons}
        <Counter productId={id} defaultValue={quantity} />
      </YStack>
      <AlertDialog
        title="Remove product"
        open={isOpen}
        description="Are you sure you want to delete this item from your cart? This action cannot be undone."
        onCancel={handleCancelAlert}
        onSuccess={handleSuccessAlert}
      />
    </XStack>
  )
}

export default memo(CartItem, isEqual)
