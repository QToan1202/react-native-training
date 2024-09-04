import { Heading, YStack } from 'tamagui'

import { Button } from '@practice-three/components'

import { Banner as BannerLogo, ForeverLogo } from '../../../assets/images'

const Banner = () => (
  <YStack maxHeight={340}>
    <BannerLogo width="100%" height="100%" />
    <YStack
      position="absolute"
      inset={0}
      alignItems="center"
      justifyContent="center"
      paddingVertical={80}
      backgroundColor="$imageOverlay"
      gap={18}
    >
      <ForeverLogo height={30} width={175} />
      <Heading color="$pure_white" fontSize="$5" fontWeight="700" textAlign="center">
        Big Fashion Festival
      </Heading>
      <Heading color="$pure_white" fontSize="$5" fontWeight="700" textAlign="center">
        70&#37; &#45; 80&#37; off
      </Heading>
      <Button
        variant="outlined"
        title="explore"
        alignSelf="center"
        marginTop={10}
        borderRadius={6}
        paddingVertical={5}
        paddingHorizontal={30}
        borderColor="$pure_white"
        fontSize="$3"
        color="$pure_white"
      />
    </YStack>
  </YStack>
)

export default Banner
