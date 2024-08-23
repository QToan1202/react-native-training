import { Heading, YStack } from 'tamagui'
import { useEffect } from 'react'
import { useStore } from 'zustand'

import { Button } from '@practice-three/components'
import type { OrderTabScreenProps } from '@practice-three/types'

import { CartItemList, CartItemSkeleton, Search, Summary } from '../../components'
import { useFindProducts } from '../../hooks'
import { cartStore, CartContext } from '../../contexts'

type CartScreenProps = OrderTabScreenProps<'Cart'>

const Cart = ({ navigation }: CartScreenProps) => {
  const [isLoading, data] = useFindProducts()
  const set = useStore(cartStore, (state) => state.set)
  useEffect(() => {
    !isLoading && set(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading])
  const handleSeeMoreOffers = () => navigation.navigate('PromoCode')
  const handleNavigateToAddress = () => navigation.navigate('Address')

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
          onPress={handleNavigateToAddress}
        />
      </YStack>
    </CartContext.Provider>
  )
}

export default Cart
