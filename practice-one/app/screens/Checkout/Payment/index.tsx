import { useCallback } from 'react'
import { ScrollView, View } from 'react-native'

import { Address, PaymentCardPlaceholder, Price, Radio } from '@components'
import { CHECKOUT, PAYMENT_METHODS } from '@constants'

import styles from './styles'

const Payment = () => {
  const handlePress = useCallback(() => undefined, [])
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <PaymentCardPlaceholder />
        </View>
      </View>
      <View>
        <Radio style={styles.radio} radioList={PAYMENT_METHODS} />
      </View>
      <Address
        name="Deliver to Tradly Team, 75119"
        streetAddress="Kualalumpur, Malaysia"
        onPress={handlePress}
      />
      <ScrollView>
        <Price total={25} data={CHECKOUT.PRICE_DETAILS} />
      </ScrollView>
    </View>
  )
}

export default Payment
