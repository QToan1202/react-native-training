import { useCallback, useMemo } from 'react'
import {
  Image,
  ImageBackground,
  ImageBackgroundProps,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import Paragraph from '@components/Paragraph'
import { checkCardType } from '@utils'
import { containerStyles } from '@styles'
import { ICardInformation } from '@types'

import styles from './styles'

export interface PaymentCardProps extends ICardInformation, Omit<ImageBackgroundProps, 'source'> {
  isSelected?: boolean
  contentContainerStyle?: StyleProp<ViewStyle>
  onCardSelected?: (data: ICardInformation) => void
}

const PaymentCard = ({
  name,
  cardNumber,
  cvc,
  expires,
  isSelected = false,
  style,
  contentContainerStyle,
  onCardSelected,
  ...rest
}: PaymentCardProps) => {
  const cardBg = useMemo(() => {
    switch (checkCardType(cardNumber)) {
      case 'mastercard':
        return require('@assets/payment/mastercard.png')
      case 'visa':
        return require('@assets/payment/visa.png')
      default:
        return require('@assets/payment/normal.png')
    }
  }, [cardNumber])
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
          source={cardBg}
          style={[styles.container, contentContainerStyle]}
          {...rest}
        >
          <View style={styles.rowSpacing}>
            <View>
              <Paragraph style={styles.title} content="holder name" />
              <Paragraph content={name} numberOfLines={1} />
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
            <Paragraph style={styles.cvc} content={cvc} />
          </View>
        </ImageBackground>
        {isSelected && <Image source={require('@assets/check.png')} style={styles.checkIcon} />}
      </>
    </TouchableOpacity>
  )
}

export default PaymentCard
