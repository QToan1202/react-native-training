import { Heading, ScrollView, XStack } from 'tamagui'

import { DealCard } from '../../DealCard'

import { DEAL_ITEMS_DATA } from '../../../constants'

const Deal = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, gap: 25 }}>
      <Heading color="$black" fontSize="$6" fontWeight="700">
        Deals of the Day
      </Heading>
      <XStack gap={70}>
        {DEAL_ITEMS_DATA.map((itemProps) => (
          <DealCard {...itemProps} />
        ))}
      </XStack>
    </ScrollView>
  )
}
export default Deal
