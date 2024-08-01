import { Heading, YStack } from 'tamagui'
import { useContext, useEffect } from 'react'
import { useStore } from 'zustand'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Button } from '@shared/components'
import type { CartStack } from '@shared/types'

import { CartItemList, CartItemSkeleton, Search, Summary } from '../../components'
import { useFindProducts } from '../../hooks'
import { cartStore, CartContext } from '../../context'

type CartScreenProps = NativeStackScreenProps<CartStack, 'Cart'>

const Cart = ({ navigation }: CartScreenProps) => {
  const [isLoading, data] = useFindProducts()
  const store = useContext(CartContext)
  const set = useStore(store, (state) => state.set)
  useEffect(() => {
    !isLoading && set(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading])
  const handleSeeMoreOffers = () => navigation.navigate('PromoCode')

  return (
    <CartContext.Provider value={cartStore}>
      <YStack gap={16}>
        <Heading
          color="$primary"
          textTransform="capitalize"
          fontSize="$3"
          fontWeight="700"
          letterSpacing={0.5}
        >
          Your Cart
        </Heading>
        {isLoading ? (
          [...Array(2).keys()].map((item) => <CartItemSkeleton key={item} />)
        ) : (
          <CartItemList />
        )}
        <Search />
        <Button
          alignSelf="flex-end"
          padding={5}
          variant="text"
          title="see offers"
          onPress={handleSeeMoreOffers}
        />
        <Summary isLoading={isLoading} />
        <Button
          title="check out"
          isDisable={isLoading}
          fontSize="$3"
          fontWeight="700"
          letterSpacing={0.5}
        />
      </YStack>
    </CartContext.Provider>
  )
}

export default Cart
