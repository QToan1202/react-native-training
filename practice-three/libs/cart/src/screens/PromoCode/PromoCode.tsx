import { Fragment, useId, useMemo, useState } from 'react'
import { NativeSyntheticEvent, TextInputEndEditingEventData } from 'react-native'
import { AnimatePresence, Heading, Separator, XStack, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useQuery } from '@tanstack/react-query'

import { CartStack, TOffer } from '@shared/types'
import { getOffersQuery } from '@shared/queries'
import { BaseInput, Button, Text } from '@shared/components'

import { PromoCodeHeader, PromoCode as PromoCodeItem } from '../../components'
import { findPromoCodeQuery, useDebounce } from '../../hooks'

type CartScreenProps = NativeStackScreenProps<CartStack, 'PromoCode'>

const PromoCode = (props: CartScreenProps) => {
  const { data: offers, isSuccess } = useQuery(getOffersQuery('/offers'))
  const [enteredPromoCode, setEnteredPromoCode] = useState<string>('')
  const searchPromoCode = useDebounce(enteredPromoCode, 300)
  const {
    data: findOfferResult,
    isLoading,
    isPending,
    isSuccess: isFindOfferSuccess,
  } = useQuery(findPromoCodeQuery('/offers', searchPromoCode))
  const errorTextId = useId()

  const renderListOfOffers = useMemo(() => {
    if (!isSuccess) return null
    if (!offers.length)
      return (
        <YStack alignItems="center" gap={12} fullscreen>
          <Heading color="$black" fontSize="$5" fontWeight="bold" textAlign="center">
            No Products Found
          </Heading>
          <Text>We couldn't find any products that match your search.</Text>
        </YStack>
      )

    return offers.map(({ id, ...offerProps }: TOffer, index: number) => (
      <Fragment key={id}>
        <PromoCodeItem id={id} {...offerProps} />
        {index < offers.length - 1 ? (
          <Separator marginVertical={16} borderColor="$gray_100" />
        ) : null}
      </Fragment>
    ))
  }, [offers, isSuccess])

  const handleGetEnterPromoCode = (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
    setEnteredPromoCode(e.nativeEvent.text)
  }

  return (
    <YStack gap={15}>
      <PromoCodeHeader {...props} />
      <XStack
        position="relative"
        maxWidth={300}
        marginBottom={15}
        borderBottomWidth={1}
        borderBottomColor="$gray_100"
      >
        <BaseInput
          paddingHorizontal={0}
          paddingVertical={6}
          placeholder="Enter Promo Code"
          onEndEditing={handleGetEnterPromoCode}
        />
        <Button
          paddingVertical={0}
          paddingRight={0}
          paddingLeft={10}
          title="apply"
          variant="text"
          isDisable={!isFindOfferSuccess}
          loading={isLoading}
          {...(findOfferResult?.length
            ? { color: '$primary' }
            : { color: '$gray_100', isDisable: true })}
        />
        <AnimatePresence>
          {!findOfferResult?.length && !isPending ? (
            <Text
              position="absolute"
              left={0}
              bottom={-20}
              key={errorTextId}
              animation="slow"
              enterStyle={{
                bottom: 0,
                opacity: 0,
              }}
              exitStyle={{
                bottom: -40,
                opacity: 0,
              }}
              color="$red_100"
              fontSize="$1"
              fontStyle="italic"
            >
              Can't not find enter promo code
            </Text>
          ) : null}
        </AnimatePresence>
      </XStack>
      <Heading color="$black" fontSize="$4" fontWeight="500">
        Available offers
      </Heading>
      <YStack>{renderListOfOffers}</YStack>
    </YStack>
  )
}

export default PromoCode
