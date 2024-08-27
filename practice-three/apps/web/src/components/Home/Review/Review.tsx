import { Heading, ScrollView, XStack } from 'tamagui'

import { Review as ReviewCard } from '../../Review'

import { REVIEW_ITEMS_DATA } from '../../../constants'

const Review = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, gap: 25 }}>
      <Heading color="$black" fontSize="$6" fontWeight="700">
        What Our Customer Says
      </Heading>
      <XStack gap={60}>
        {REVIEW_ITEMS_DATA.map((itemProps) => (
          <ReviewCard {...itemProps} />
        ))}
      </XStack>
    </ScrollView>
  )
}
export default Review
