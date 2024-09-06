import { Heading, Square, XStack, YStack } from 'tamagui'

import { Text } from '@practice-three/components'

import { QUALITY_CARDS_DATA } from '../../../constants'

const Quality = () => {
  return (
    <XStack justifyContent="space-between">
      {QUALITY_CARDS_DATA.map(({ icon, title, description }, index) => (
        <YStack
          key={index}
          gap={10}
          width={320}
          height={200}
          alignItems="center"
          borderRadius={10}
          paddingVertical={20}
          paddingHorizontal={30}
          backgroundColor="$gray_50"
        >
          <Square width={56} aspectRatio={1}>
            {icon}
          </Square>
          <Heading marginBottom={6} color="$black" fontSize="$5" fontWeight="700">
            {title}
          </Heading>
          <Text fontSize="$3" textAlign="center">
            {description}
          </Text>
        </YStack>
      ))}
    </XStack>
  )
}
export default Quality
