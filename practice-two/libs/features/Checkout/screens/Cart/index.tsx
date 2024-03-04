import { useCallback, useMemo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, YStack, Spinner } from 'tamagui'
import { useShallow } from 'zustand/react/shallow'

import {
  Button,
  Heading,
  Paragraph,
  TabBar,
  ICart,
  useCartStore,
  useOrderStore,
  Feature,
} from '@practice-two/shared'
import { RootStackParamList } from 'libs/shared/navigation/Stack'
import { Address, CartItem, Price } from '../../components'

export type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>

const Cart = ({ navigation }: CartScreenProps) => {
  const [isHydrated, address] = useOrderStore(
    useShallow((state) => [state.isHydrated, state.address])
  )
  const [isHydratedCart, cart] = useCartStore(useShallow((state) => [state.isHydrated, state.cart]))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeAddress = useCallback(() => navigation.navigate('AddAddress'), [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigateAddCard = useCallback(() => navigation.navigate('Payment'), [])
  const renderAddress: React.JSX.Element | null = useMemo(() => {
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
  const renderCartList: React.JSX.Element | React.JSX.Element[] = useMemo(() => {
    if (!isHydratedCart) return <Spinner size="large" color="$color.primary" />
    if (!cart.length)
      return (
        <YStack padding="$space.4">
          <Heading
            content="Cart empty!!!"
            color="$color.gray_50"
            fontWeight="$3"
            textAlign="center"
          />
          <Paragraph
            content="Shopping with us and add anything you desire of"
            color="$color.gray_50"
            textAlign="center"
          />
        </YStack>
      )

    return cart.map(({ id, img, name, price, discountPrice, quantity }: ICart) => (
      <CartItem
        key={id}
        image={{ uri: img }}
        name={name}
        price={price}
        discountPrice={discountPrice}
        quantity={quantity}
      />
    ))
  }, [cart, isHydratedCart])

  return (
    <Feature feat="checkout">
      <ScrollView flex={1} backgroundColor="$color.bg_layer">
        {renderAddress || (
          <Button title="+ add new address" variant="quaternary" onPress={handleChangeAddress} />
        )}
        <YStack marginTop="$space.2.5" marginBottom="$space.10">
          {renderCartList}
          <Button
            title="remove"
            variant="quaternary"
            color="$color.gray_50"
            onPress={handleChangeAddress}
          />
        </YStack>
        <Price data={cart} deliveryFee={1.5} />
      </ScrollView>
      <TabBar title="Continue to Payment" onPress={handleNavigateAddCard} />
    </Feature>
  )
}

export default Cart
