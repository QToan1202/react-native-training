import { useCallback } from 'react'
import { ScrollView, View } from 'react-native'

import { Button, CartItem, Price } from '@components'
import { CHECKOUT } from '@constants'

import styles from './styles'

const Cart = () => {
  const handlePress = useCallback(() => undefined, [])

  return (
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
  )
}

export default Cart
