import { Heading, styled, TextContextStyles, XStack, YStack } from 'tamagui'
import { useMemo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Text as BaseText, Button, Skeleton } from '@shared/components'
import type { CartStack, TCartItem } from '@shared/types'
import { useCartStore } from '@shared/contexts'

import { CartItem, CartItemSkeleton, Search } from '../../components'
import { useFindProducts } from '../../hooks'
import { FEES } from '../../constants'
import { useOfferStore } from '../../context'

type CartScreenProps = NativeStackScreenProps<CartStack, 'Cart'>

const Text = styled(BaseText, {
  color: '#9098b1',
  letterSpacing: 0.5,
})

const textStyles: TextContextStyles = {
  fontSize: '$3',
  fontWeight: '700',
  letterSpacing: 0.5,
}

const calculatePrice = (data: Partial<TCartItem>[]) => {
  return data.reduce((prev, curr) => {
    if (!curr?.price) return prev

    return (prev += curr.price)
  }, 0)
}

const Cart = ({ navigation }: CartScreenProps) => {
  const [isLoading, data] = useFindProducts()
  const offerCode = useOfferStore((state) => state.value)
  const renderCartItems = useMemo(
    () =>
      data.map((product: Partial<TCartItem>) => {
        const { id, name, price, image, quantity } = product

        if (!id || !name || !price || !image || !quantity) return null
        const foundProduct = product as TCartItem

        return (
          <CartItem
            animation="slow"
            enterStyle={{
              opacity: 0,
            }}
            exitStyle={{
              opacity: 0,
            }}
            key={foundProduct.id}
            {...foundProduct}
          />
        )
      }),
    [data]
  )
  const handleSeeMoreOffers = () => navigation.navigate('PromoCode')
  const offerDiscountValue = useMemo(() => {
    if (!offerCode) return 0

    return ((calculatePrice(data) * offerCode.discountPercentage) / 100).toFixed(2)
  }, [data, offerCode])

  return (
    <YStack gap={16}>
      <Heading color="$primary" textTransform="capitalize" {...textStyles}>
        Your Cart
      </Heading>
      {isLoading
        ? [...Array(2).keys()].map((item) => <CartItemSkeleton key={item} />)
        : renderCartItems}
      <Search />
      <Button
        alignSelf="flex-end"
        padding={5}
        variant="text"
        title="see offers"
        onPress={handleSeeMoreOffers}
      />
      <YStack borderStyle="dashed" borderBottomWidth={1} borderBottomColor="$pale" gap={15}>
        <XStack justifyContent="space-between" alignItems="center">
          <Text>
            {data.length > 1 ? 'Items' : 'Item'} ({data.length})
          </Text>
          {isLoading ? (
            <Skeleton width={50} height={16} />
          ) : (
            <Text color="$primary">${calculatePrice(data)}</Text>
          )}
        </XStack>
        <XStack justifyContent="space-between" alignItems="center">
          <Text>Shipping</Text>
          <Text color="$primary">${FEES.SHIP}</Text>
        </XStack>
        {offerCode && (
          <XStack
            animation="slow"
            enterStyle={{
              opacity: 0,
            }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>Promo Code ({offerCode.code})</Text>
            <Text color="$primary">(-${offerDiscountValue})</Text>
          </XStack>
        )}
        <XStack justifyContent="space-between" alignItems="center">
          <Text>Import charges</Text>
          <Text color="$primary">${FEES.IMPORT}</Text>
        </XStack>
      </YStack>

      <XStack justifyContent="space-between" alignItems="center">
        <Heading color="$pure_black" textTransform="capitalize" {...textStyles}>
          Total Price
        </Heading>
        {isLoading ? (
          <Skeleton width={70} height={25} />
        ) : (
          <Text color="$green_100" {...textStyles}>
            ${(calculatePrice(data) + FEES.SHIP + FEES.IMPORT - +offerDiscountValue).toFixed(2)}
          </Text>
        )}
      </XStack>
      <Button title="check out" isDisable={isLoading} {...textStyles} />
    </YStack>
  )
}

export default Cart
