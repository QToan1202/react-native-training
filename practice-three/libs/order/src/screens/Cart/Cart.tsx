import { Heading, YStack } from 'tamagui'

import { Button } from '@practice-three/shared/ui'
import type { OrderTabScreenProps } from '@practice-three/shared/types'

import { CartItemList, CartItemSkeleton, Search, Summary } from '../../components'
import { useFindProducts } from '../../hooks'

type CartScreenProps = OrderTabScreenProps<'Cart'>

const Cart = ({ navigation }: CartScreenProps) => {
  const [isLoading, data] = useFindProducts()
  const handleSeeMoreOffers = () => navigation.navigate('PromoCode')
  const handleNavigateToAddress = () => navigation.navigate('Address')

  return (
    <YStack gap={16} paddingTop={55} paddingHorizontal={35} backgroundColor="$pure_white">
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
        <CartItemList data={data} />
      )}
      <Search />
      <Button
        alignSelf="flex-end"
        padding={5}
        variant="text"
        title="see offers"
        onPress={handleSeeMoreOffers}
      />
      <Summary />
      <Button
        title="check out"
        isDisable={isLoading}
        fontSize="$3"
        fontWeight="700"
        letterSpacing={0.5}
        onPress={handleNavigateToAddress}
      />
    </YStack>
  )
}

export default Cart
