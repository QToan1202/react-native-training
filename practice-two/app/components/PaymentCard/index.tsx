import { memo, useCallback, useMemo } from 'react'
import isEqual from 'react-fast-compare'
import { StyleProp, ViewStyle } from 'react-native'
import { Stack, YStack } from 'tamagui'

import Paragraph from '@components/Paragraph'
import { checkCardType } from '@utils'
import { ICardInformation } from '@types'

import {
  StyledImage,
  StyledImageBackground,
  StyledImageBackgroundProps,
  StyledTitle,
} from './styles'

export type PaymentCardProps = ICardInformation &
  StyledImageBackgroundProps & {
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
    <Stack alignSelf="flex-start" pressStyle={{ opacity: 0.8 }} onPress={handleSelectCard}>
      <>
        <StyledImageBackground {...rest} source={cardBg}>
          <YStack justifyContent="space-between" height="100%">
            <Stack>
              <StyledTitle content="holder name" />
              <Paragraph content={name} numberOfLines={1} />
            </Stack>

            <Stack>
              <StyledTitle content="card number" />
              <Paragraph
                fontSize="$2"
                width={167}
                numberOfLines={1}
                content={cardNumber.replace(/(\d{4})/g, '$1 ')}
              />
            </Stack>

            <Stack>
              <StyledTitle content="exp. date" />
              <Paragraph content={expires} />
            </Stack>
          </YStack>

          <Stack>
            <StyledTitle content="cvc" textTransform="uppercase" />
            <Paragraph content={cvc} textAlign="right" />
          </Stack>
        </StyledImageBackground>
        {isSelected && <StyledImage source={require('@assets/check.png')} />}
      </>
    </Stack>
  )
}

export default memo(PaymentCard, isEqual)
