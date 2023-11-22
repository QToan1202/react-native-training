import { memo, useCallback, useMemo } from 'react'
import isEqual from 'react-fast-compare'
import { Stack, StackProps, YStack } from 'tamagui'

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
    containerStyle?: StackProps
    onCardSelected?: (data: ICardInformation) => void
  }

const PaymentCard = ({
  name,
  cardNumber,
  cvc,
  expires,
  isSelected = false,
  containerStyle,
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
    <Stack
      alignSelf="flex-start"
      pressStyle={{ opacity: 0.8 }}
      onPress={handleSelectCard}
      {...containerStyle}
    >
      <>
        <StyledImageBackground {...rest} source={cardBg}>
          <YStack justifyContent="space-between" height="100%">
            <YStack>
              <StyledTitle content="holder name" />
              <Paragraph content={name} numberOfLines={1} />
            </YStack>

            <YStack>
              <StyledTitle content="card number" />
              <Paragraph
                fontSize="$2"
                width={167}
                numberOfLines={1}
                content={cardNumber.replace(/(\d{4})/g, '$1 ')}
              />
            </YStack>

            <YStack>
              <StyledTitle content="exp. date" />
              <Paragraph content={expires} />
            </YStack>
          </YStack>

          <YStack>
            <StyledTitle content="cvc" textTransform="uppercase" />
            <Paragraph content={cvc} textAlign="right" />
          </YStack>
        </StyledImageBackground>
        {isSelected && <StyledImage source={require('@assets/check.png')} />}
      </>
    </Stack>
  )
}

export default memo(PaymentCard, isEqual)
