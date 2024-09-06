import { Heading, YStack } from 'tamagui'

import { Button, Image } from '@practice-three/components'

import { banner, foreverLogo } from '../../../assets/images'

const Banner = () => (
  <YStack>
    <Image
      $platform-web={{ filter: 'brightness(70%)' }}
      width="100%"
      flex={1}
      source={{ uri: banner, height: 890 }}
    />
    <YStack position="absolute" inset={0} top={200} gap={35}>
      <YStack gap={90}>
        <Image source={{ uri: foreverLogo, height: 90, width: 560 }} />
        <Heading color="$pure_white" fontSize={48} fontWeight="700" textAlign="center">
          Big Fashion Festival
        </Heading>
      </YStack>
      <Heading color="$pure_white" fontSize={42} fontWeight="700" textAlign="center">
        70&#37; &#45; 80&#37; off
      </Heading>
      <Button
        variant="outlined"
        title="explore"
        alignSelf="center"
        marginTop={35}
        paddingVertical={10}
        borderRadius={10}
        borderColor="$pure_white"
        fontSize="$5"
        color="$pure_white"
      />
    </YStack>
  </YStack>
)

export default Banner
