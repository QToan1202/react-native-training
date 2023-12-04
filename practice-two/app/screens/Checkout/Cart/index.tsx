import { useCallback, useMemo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, YStack } from 'tamagui'
import { useShallow } from 'zustand/react/shallow'

import { RootStackParamList } from '@navigation/Stack'
import { Address, Button, CartItem, Price, TabBar } from '@components'
import { CHECKOUT } from '@constants'
import { useOrderStore } from '@stores'

export type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>

const Cart = ({ navigation }: CartScreenProps) => {
  const [isHydrated, address] = useOrderStore(
    useShallow((state) => [state.isHydrated, state.address])
  )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeAddress = useCallback(() => navigation.navigate('AddAddress'), [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigateAddCard = useCallback(() => navigation.navigate('Payment'), [])
  const renderAddress = useMemo(() => {
    if (!isHydrated) return null
    if (!address) return null

    return (
      <Address
        name={`Deliver to ${address.name}`}
        streetAddress={address.streetAddress}
        onPress={handleChangeAddress}
      />
    )
  }, [isHydrated, address, handleChangeAddress])

  return (
    <>
      <ScrollView flex={1} backgroundColor="$color.bg_layer">
        {renderAddress || (
          <Button title="+ add new address" variant="quaternary" onPress={handleChangeAddress} />
        )}
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
            onPress={handleChangeAddress}
          />
        </YStack>
        <Price data={CHECKOUT.PRICE_DETAILS} total={25} />
      </ScrollView>
      <TabBar title="Continue to Payment" onPress={handleNavigateAddCard} />
    </>
  )
}

export default Cart
