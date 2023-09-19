import { useCallback } from 'react'
import { ScrollView, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { Button, CartItem, Price, TabBar } from '@components'
import { CHECKOUT } from '@constants'

import styles from './styles'

export interface CartScreenProps extends NativeStackScreenProps<RootStackParamList, 'Cart'> {}

const Cart = ({ navigation }: CartScreenProps) => {
  const handlePress = useCallback(() => navigation.navigate('AddAddress'), [navigation])
  const handleNavigateAddCard = useCallback(() => navigation.navigate('Payment'), [navigation])

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Button variant="quaternary" title="+ add new address" onPress={handlePress} />
        <View style={styles.itemList}>
          <CartItem
            image={require('@assets/cart/item.png')}
            name="coca cola"
            price={50}
            discountPrice={25}
            quantity={1}
          />
          <Button
            titleStyle={styles.btnTitle}
            variant="quaternary"
            title="remove"
            onPress={handlePress}
          />
        </View>
        <Price data={CHECKOUT.PRICE_DETAILS} total={25} />
      </ScrollView>
      <TabBar title="Continue to Payment" onPress={handleNavigateAddCard} />
    </>
  )
}

export default Cart
