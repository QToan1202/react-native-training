import { Heading, ScrollView, XStack, YStack } from 'tamagui'

import { OfferCard } from '../../OfferCard'
import { OFFER_ITEMS_DATA } from '../../../constants'

const Offer = () => (
  <ScrollView contentContainerStyle={{ flex: 1, gap: 25, padding: 6 }}>
    <Heading color="$black" fontSize="$6" fontWeight="700">
      Trending Offers
    </Heading>
    <XStack justifyContent="center" alignItems="center" gap={70}>
      {OFFER_ITEMS_DATA.map((itemProps, index) => (
        <OfferCard key={index} {...itemProps} />
      ))}
    </XStack>
  </ScrollView>
)

export default Offer
