import { Heading, Stack, styled, XStack, YStack } from 'tamagui'

import { Button, Image, Text as BaseText } from '@practice-three/shared/ui'

import { aboutUs } from '../../../assets/images'

const Text = styled(BaseText, {
  fontSize: '$5',
})

const AboutUs = () => {
  return (
    <Stack>
      <Heading color="$black" fontSize="$6">
        About Us
      </Heading>
      <XStack gap={20}>
        <YStack flex={1} flexBasis={0} justifyContent="space-between" maxWidth={900}>
          <Heading color="$black" fontSize="$6" fontWeight="700">
            Business Name
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed
            sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper
            malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor
            euismod augue cras eu eget. Risus suspendisse mauris ullamcorper felis a, quam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales
            molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In
            sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue
            cras eu eget. Risus suspendisse mauris ullamcorper felis a, quam.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin
            dictum gravida. Porttitor maecenas
          </Text>
          <Text fontWeight="700">Contact Information</Text>
          <Text>&#43;91 1256378409</Text>
          <Text>Someting@random.com</Text>
          <Button
            alignSelf="flex-start"
            title="Directions"
            variant="outlined"
            color="$black"
            borderColor="$black"
          />
        </YStack>
        <Image flex={1} flexBasis={0} borderRadius={10} source={{ uri: aboutUs, height: 600 }} />
      </XStack>
    </Stack>
  )
}

export default AboutUs
