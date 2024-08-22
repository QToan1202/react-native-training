import { Heading, YStack } from 'tamagui'

import { Text } from '../../components'

const NotFound = () => (
  <YStack flex={1} justifyContent="center" alignItems="center" gap={16} backgroundColor="$white">
    <Heading color="$pure_black" fontSize={80} fontWeight="700">
      404
    </Heading>
    <Heading color="$pure_black" fontSize="$5" fontWeight="500">
      Not Found
    </Heading>
    <Text color="$pure_black" fontSize="$3">
      This resource requested could not be found on this server!
    </Text>
  </YStack>
)

export default NotFound
