import { useCallback, useRef } from 'react'
import { Image, ImageBackground, ImageBackgroundProps, TouchableOpacity, View } from 'react-native'

import Paragraph from '@components/Paragraph'
import { checkCardType } from '@utils'
import { containerStyles } from '@styles'
import { ICardInformation } from '@types'

import styles from './styles'

export interface PaymentCardProps extends ICardInformation, Omit<ImageBackgroundProps, 'source'> {
  isSelected?: boolean
  onCardSelected?: (data: ICardInformation) => void
}

const PaymentCard = ({
  name,
  cardNumber,
  cvc,
  expires,
  isSelected = false,
  style,
  onCardSelected,
  ...rest
}: PaymentCardProps) => {
  const masterBg = useRef(
    checkCardType(cardNumber) === 'mastercard' && require('@assets/payment/mastercard.png')
  )
  const visaBg = useRef(checkCardType(cardNumber) === 'visa' && require('@assets/payment/visa.png'))
  const handleSelectCard = useCallback(
    () => onCardSelected && onCardSelected({ name, cardNumber, cvc, expires }),
    [cardNumber, cvc, expires, name, onCardSelected]
  )

  return (
    <TouchableOpacity
      style={[containerStyles.shrink, style]}
      activeOpacity={0.8}
      onPress={handleSelectCard}
    >
      <>
        <ImageBackground
          source={masterBg.current || visaBg.current}
          style={styles.container}
          {...rest}
        >
          <View style={styles.rowSpacing}>
            <View>
              <Paragraph style={styles.title} content="holder name" />
              <Paragraph content={name} />
            </View>

            <View>
              <Paragraph style={styles.title} content="card number" />
              <Paragraph
                style={styles.cardNumber}
                size="md"
                numberOfLines={1}
                content={cardNumber.replace(/(\d{4})/g, '$1 ')}
              />
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
        {isSelected && <Image source={require('@assets/check.png')} style={styles.checkIcon} />}
      </>
    </TouchableOpacity>
  )
}

export default PaymentCard
