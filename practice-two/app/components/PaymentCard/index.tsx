import { memo, useCallback, useMemo } from 'react'
import isEqual from 'react-fast-compare'
import { Stack, StackProps, YStack } from 'tamagui'

import Paragraph from '@components/Paragraph'
import { checkCardType, formatCardNumber } from '@utils'
import { ICardBase } from '@types'

import {
  StyledImage,
  StyledImageBackground,
  StyledImageBackgroundProps,
  StyledTitle,
} from './styles'

export type PaymentCardProps = StackProps &
  ICardBase & {
    isSelected?: boolean
    cardStyle?: StyledImageBackgroundProps['style']
    onCardSelected?: (data: ICardBase) => void
  }

const PaymentCard = ({
  name,
  number,
  cvc,
  expired,
  isSelected = false,
  onCardSelected,
  cardStyle,
  ...rest
}: PaymentCardProps) => {
  const cardBg = useMemo(() => {
    switch (checkCardType(number)) {
      case 'mastercard':
        return require('@assets/payment/mastercard.png')
      case 'visa':
        return require('@assets/payment/visa.png')
      default:
        return require('@assets/payment/normal.png')
    }
  }, [number])
  const handleSelectCard = useCallback(
    () => onCardSelected && onCardSelected({ name, number, cvc, expired }),
    [number, cvc, expired, name, onCardSelected]
  )

  return (
    <Stack
      alignSelf="flex-start"
      pressStyle={{ opacity: 0.8 }}
      onPress={handleSelectCard}
      {...rest}
    >
      <>
        <StyledImageBackground source={cardBg} style={cardStyle}>
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
                content={formatCardNumber(number)}
              />
            </YStack>

            <YStack>
              <StyledTitle content="exp. date" />
              <Paragraph content={expired} />
            </YStack>
          </YStack>

          <YStack>
            <StyledTitle content="cvc" textTransform="uppercase" />
            <Paragraph content={String(cvc)} textAlign="right" />
          </YStack>
        </StyledImageBackground>
        {isSelected && <StyledImage source={require('@assets/check.png')} />}
      </>
    </Stack>
  )
}

export default memo(PaymentCard, isEqual)
