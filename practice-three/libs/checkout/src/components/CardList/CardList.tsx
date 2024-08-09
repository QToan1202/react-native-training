import { Fragment } from 'react'
import { Heading, Separator } from 'tamagui'
import { useQuery } from '@tanstack/react-query'

import { useAuthStore } from '@shared/contexts'
import { Skeleton } from '@shared/components'

import { getCardsQuery } from '../../hooks'
import { Debit, MasterCard, Visa } from '../../assets/images'
import { TCard } from '../../types'
import { isMasterCard, isVisa } from '../../utils'
import { PaymentItem } from '../PaymentItem'

const CardList = () => {
  const user = useAuthStore((state) => state.user)
  const {
    data: cards,
    isPending: isGetCard,
    error: errorWhenGetCards,
  } = useQuery(getCardsQuery('/cards', user?.id || 'd3d1'))

  if (isGetCard)
    return [...Array(3).keys()].map((item) => (
      <Skeleton width={300} key={item}>
        <PaymentItem padding={10} label="" icon={<Debit />} />
      </Skeleton>
    ))

  if (errorWhenGetCards)
    return (
      <Heading color="$pure_black" fontSize="$3">
        An error occurred while retrieving the card. Please try again later.
      </Heading>
    )

  return cards.map(({ id, cardNumber }: TCard) => (
    <Fragment key={id}>
      <Separator alignSelf="stretch" borderColor="$pale" />
      <PaymentItem
        padding={5}
        justifyContent="space-between"
        icon={isMasterCard(cardNumber) ? <MasterCard /> : isVisa(cardNumber) ? <Visa /> : <Debit />}
        label={`*${cardNumber.slice(-4)}`}
      />
    </Fragment>
  ))
}

export default CardList
