import { Heading, isWeb, YStack } from 'tamagui'

import { RootStackScreenProps } from '@practice-three/shared/types'

import { Button, Text } from '../../components'

type NotFoundScreenProps = Partial<RootStackScreenProps<'NotFound'>>

const NotFound = ({ navigation }: NotFoundScreenProps) => {
  const handleGoBack = () => navigation?.goBack()

  return (
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
      {!isWeb && <Button title="go back" onPress={handleGoBack} />}
    </YStack>
  )
}

export default NotFound
