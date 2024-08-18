import { YStack } from 'tamagui'
import { useNavigation } from '@react-navigation/native'

import { Button, Heading, Paragraph } from '../../components'

interface ErrorScreenProps {
  title: string
  messages?: string
}

const Error = ({ title, messages = '' }: ErrorScreenProps) => {
  const { goBack } = useNavigation()

  return (
    <YStack flex={1} justifyContent="center" paddingHorizontal="$space.5" space="$space.9">
      <YStack alignItems="center" space="$space.1.5">
        <Heading content={title} color="$color.red10Dark" />
        <Paragraph content={messages} color="$color.primary" fontSize="$3" fontWeight="$2" />
      </YStack>
      <Button title="Back" onPress={goBack} />
    </YStack>
  )
}

export default Error
