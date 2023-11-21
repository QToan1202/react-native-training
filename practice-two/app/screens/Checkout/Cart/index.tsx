import { useCallback } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, YStack } from 'tamagui'

import { RootStackParamList } from '@navigation/Stack'
import { Button, CartItem, Price, TabBar } from '@components'
import { CHECKOUT } from '@constants'

export type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>

const Cart = ({ navigation }: CartScreenProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePress = useCallback(() => navigation.navigate('AddAddress'), [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigateAddCard = useCallback(() => navigation.navigate('Payment'), [])

  return (
    <>
      <ScrollView flex={1} backgroundColor="$color.bg_layer">
        <Button title="+ add new address" variant="quaternary" onPress={handlePress} />
        <YStack marginTop="$space.2.5" marginBottom="$space.10">
          <CartItem
            image={require('@assets/cart/item.png')}
            name="coca cola"
            price={50}
            discountPrice={25}
            quantity={1}
          />
          <Button
            title="remove"
            variant="quaternary"
            color="$color.gray_50"
            onPress={handlePress}
          />
        </YStack>
        <Price data={CHECKOUT.PRICE_DETAILS} total={25} />
      </ScrollView>
      <TabBar title="Continue to Payment" onPress={handleNavigateAddCard} />
    </>
  )
}

export default Cart
