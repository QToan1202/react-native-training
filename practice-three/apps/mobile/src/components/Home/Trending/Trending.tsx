import { FlatList } from 'react-native'
import { Heading, YStack } from 'tamagui'

import { TRENDING_DATA } from '../../../constants'
import { DealCard } from '../../DealCard'

const Trending = () => {
  return (
    <YStack gap={18}>
      <Heading color="$black" fontSize="$4" fontWeight="500">
        Trending Offers
      </Heading>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
        data={TRENDING_DATA}
        renderItem={({ item: itemProps }) => <DealCard flex={1} {...itemProps} />}
      />
    </YStack>
  )
}

export default Trending
