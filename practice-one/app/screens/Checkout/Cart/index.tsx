import { useCallback } from 'react'
import { ScrollView, View } from 'react-native'

import { Button, CartItem, Heading, Paragraph } from '@components'
import { containerStyles } from '@styles'

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
      <View style={styles.detailWrapper}>
        <Heading style={[styles.text, styles.title]} content="price details" />
        <View style={[containerStyles.inline, containerStyles.spaceBetween]}>
          <View style={styles.spacing}>
            <Paragraph style={styles.text} content="price (1 item)" />
            <Paragraph style={styles.text} content="delivery fee" />
          </View>
          <View style={styles.spacing}>
            <Paragraph style={styles.text} content="$25" />
            <Paragraph style={styles.text} content="info" />
          </View>
        </View>
        <View style={styles.line} />
        <Heading style={[styles.text, styles.title]} content="total amount" />
      </View>
    </ScrollView>
  )
}

export default Cart
