import { useId } from 'react'
import { AnimatePresence, XStack, XStackProps } from 'tamagui'
import { useForm, useWatch } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'

import { Button, Input, Text } from '@shared/components'

import { findPromoCodeQuery, useDebounceValue } from '../../hooks'
import { useOfferStore } from '../../contexts'

export type SearchProps = XStackProps & {
  isPromoScreen?: boolean
  placeholder?: string
}

const Search = ({
  isPromoScreen = false,
  placeholder = 'Enter Coupon Code',
  ...props
}: SearchProps) => {
  const selectOffer = useOfferStore((state) => state.setOffer)
  const { control, reset } = useForm<{ offer: string }>({ defaultValues: { offer: '' } })
  const offerValue = useWatch({ control, name: 'offer' })
  const searchPromoCode = useDebounceValue(offerValue, 500)
  const {
    data: findOfferResult,
    isLoading: isFindingCode,
    isPending,
    isSuccess: isFindOfferSuccess,
  } = useQuery(findPromoCodeQuery('/offers', searchPromoCode))
  const errorTextId = useId()
  const handleApplyOffer = () => {
    selectOffer(findOfferResult)
    reset({ offer: '' })
  }

  return (
    <XStack
      position="relative"
      borderRadius={5}
      justifyContent="space-between"
      alignItems="center"
      borderWidth={1}
      borderColor="$pale"
      {...(isPromoScreen && {
        maxWidth: 300,
        marginBottom: 15,
        borderWidth: 0,
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: '$gray_100',
      })}
      {...props}
    >
      <Input
        label="offer"
        control={control}
        placeholder={placeholder}
        containerStyle={{
          borderWidth: 0,
          flex: 1,
        }}
        {...(isPromoScreen && {
          paddingVertical: 6,
          paddingHorizontal: 0,
        })}
      />
      <Button
        paddingVertical={12}
        paddingHorizontal={20}
        borderRadius={0}
        borderTopRightRadius={5}
        borderBottomRightRadius={5}
        title="apply"
        onPress={handleApplyOffer}
        isDisable={!isFindOfferSuccess || !findOfferResult?.length}
        loading={isFindingCode}
        fontWeight="700"
        {...(isPromoScreen && {
          variant: 'text',
          paddingVertical: 0,
          paddingRight: 0,
          paddingLeft: 10,
          fontWeight: '500',
        })}
        {...(isPromoScreen
          ? findOfferResult?.length
            ? { color: '$primary' }
            : { color: '$gray_100' }
          : null)}
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
  )
}

export default Search
