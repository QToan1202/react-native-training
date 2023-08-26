import { useRef } from 'react'
import { ImageBackground, ImageBackgroundProps, StyleProp, View, ViewStyle } from 'react-native'

import Paragraph from '@components/Paragraph'
import { checkCardType } from '@utils'

import styles from './styles'

export interface PaymentCardProps extends Omit<ImageBackgroundProps, 'source'> {
  name: string
  cardNumber: string
  cvc: number
  expires: string
  style?: StyleProp<ViewStyle>
}

const PaymentCard = ({ name, cardNumber, cvc, expires, style, ...rest }: PaymentCardProps) => {
  const masterBg = useRef(
    checkCardType(cardNumber) === 'mastercard' && require('@assets/payment/mastercard.png')
  )
  const visaBg = useRef(checkCardType(cardNumber) === 'visa' && require('@assets/payment/visa.png'))

  return (
    <ImageBackground
      source={masterBg.current || visaBg.current}
      style={[styles.container, style]}
      {...rest}
    >
      <View style={styles.rowSpacing}>
        <View>
          <Paragraph style={styles.title} content="holder name" />
          <Paragraph content={name} />
        </View>

        <View>
          <Paragraph style={styles.title} content="card number" />
          <Paragraph size="md" content={cardNumber.replace(/(\d{4})/g, '$1 ')} />
        </View>

        <View>
          <Paragraph style={styles.title} content="exp. date" />
          <Paragraph content={expires} />
        </View>
      </View>

      <View>
        <Paragraph style={[styles.title, styles.titleUppercase]} content="cvc" />
        <Paragraph style={styles.cvc} content={cvc.toString()} />
      </View>
    </ImageBackground>
  )
}

export default PaymentCard
