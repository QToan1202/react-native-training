import { Fragment, useMemo } from 'react'
import { Heading, Separator, YStack } from 'tamagui'
import { useQuery } from '@tanstack/react-query'

import { OrderTabScreenProps, TOffer } from '@practice-three/shared/types'
import { getOffersQuery } from '@practice-three/shared/query'
import { Text } from '@practice-three/shared/ui'
import { ENDPOINTS } from '@practice-three/shared/constant'

import { PromoCodeHeader, PromoCode as PromoCodeItem, Search } from '../../components'

type CartScreenProps = OrderTabScreenProps<'PromoCode'>

const PromoCode = (props: CartScreenProps) => {
  const { data: offers, isSuccess } = useQuery(getOffersQuery(ENDPOINTS.OFFER))
  const renderListOfOffers = useMemo(() => {
    if (!isSuccess) return null
    if (!offers.length)
      return (
        <YStack alignItems="center" gap={12} fullscreen>
          <Heading color="$black" fontSize="$5" fontWeight="bold" textAlign="center">
            No Offers Available Found
          </Heading>
          <Text>We couldn't find any offers that match your search.</Text>
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

  return (
    <YStack gap={15}>
      <PromoCodeHeader {...props} />
      <Search placeholder="Enter Promo Code" isPromoScreen />
      <Heading color="$black" fontSize="$4" fontWeight="500">
        Available offers
      </Heading>
      <YStack>{renderListOfOffers}</YStack>
    </YStack>
  )
}

export default PromoCode
