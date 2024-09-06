import { Heading, YStack } from 'tamagui'

import { Text, Button } from '../../components'

export type UnavailableScreenProps = {
  title?: string
  message?: string
  onPressBtn: () => void
}

const Unavailable = ({
  title = 'Coming Soon',
  message = 'This feature is currently under development and will be available in the near future. Stay tuned for updates!',
  onPressBtn,
}: UnavailableScreenProps) => {
  return (
    <YStack
      gap={12}
      alignItems="center"
      justifyContent="center"
      backgroundColor="$white"
      fullscreen
    >
      <Heading fontSize="$4" color="$primary">
        {title}
      </Heading>
      <Text textAlign="center" fontSize="$2">
        {message}
      </Text>
      <Button title="Go to home" paddingHorizontal={10} onPress={onPressBtn} />
    </YStack>
  )
}

export default Unavailable
