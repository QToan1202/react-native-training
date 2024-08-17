import { useStore } from 'zustand'
import { useContext, useMemo } from 'react'
import { YStack, XStack, Heading, styled } from 'tamagui'

import { Skeleton, Text as BaseText } from '@practice-three/components'
import { TCartItem } from '@practice-three/types'

import { FEES } from '../../constants'
import { CartContext, useOfferStore } from '../../contexts'

export type SummaryProps = {
  isLoading: boolean
}

const calculatePrice = (data: TCartItem[]) => {
  return data.reduce((prev, curr) => (prev += curr.price * curr.quantity), 0)
}

const Text = styled(BaseText, {
  color: '#9098b1',
  letterSpacing: 0.5,
})

const Summary = ({ isLoading }: SummaryProps) => {
  const store = useContext(CartContext)
  const data = useStore(store, (state) => state.cart)
  const offerCode = useOfferStore((state) => state.value)
  const offerDiscountValue = useMemo(() => {
    if (!offerCode) return 0

    return ((calculatePrice(data) * offerCode.discountPercentage) / 100).toFixed(2)
  }, [data, offerCode])

  return (
    <>
      <YStack borderStyle="dashed" borderBottomWidth={1} borderBottomColor="$pale" gap={15}>
        <XStack justifyContent="space-between" alignItems="center">
          <Text>
            {data.length > 1 ? 'Items' : 'Item'} ({data.length})
          </Text>
          {isLoading ? (
            <Skeleton width={50} height={16} />
          ) : (
            <Text color="$primary">${calculatePrice(data).toFixed(2)}</Text>
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
        <Heading
          color="$pure_black"
          textTransform="capitalize"
          fontSize="$3"
          fontWeight="700"
          letterSpacing={0.5}
        >
          Total Price
        </Heading>
        {isLoading ? (
          <Skeleton width={70} height={25} />
        ) : (
          <Text color="$green_100" fontSize="$3" fontWeight="700" letterSpacing={0.5}>
            ${(calculatePrice(data) + FEES.SHIP + FEES.IMPORT - +offerDiscountValue).toFixed(2)}
          </Text>
        )}
      </XStack>
    </>
  )
}

export default Summary
