import { FlatList } from 'react-native'
import { Heading, YStack } from 'tamagui'

import { DEAL_DATA } from '../../../constants'
import { DealCard } from '../../DealCard'

const Deal = () => {
  return (
    <YStack gap={18}>
      <Heading color="$black" fontSize="$4" fontWeight="500">
        Deals Of The Day
      </Heading>
      <FlatList
        scrollEnabled={false}
        numColumns={2}
        contentContainerStyle={{ gap: 16 }}
        data={DEAL_DATA}
        renderItem={({ item: itemProps }) => <DealCard flex={1} {...itemProps} />}
      />
    </YStack>
  )
}

export default Deal
