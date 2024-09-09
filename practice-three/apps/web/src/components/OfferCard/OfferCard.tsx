import { ImageURISource } from 'react-native'
import { CardProps, H5, XStack, YStack } from 'tamagui'

import { Button, Image } from '@practice-three/components'

export type DealCardProps = CardProps & {
  image: ImageURISource['uri']
  brandImage: ImageURISource['uri']
  title: string
  size?: 'sm' | 'normal'
}

const OfferCard = ({ image, brandImage, title, size = 'normal', ...rest }: DealCardProps) => {
  return (
    <XStack
      width={size === 'normal' ? 1150 : 780}
      height={size === 'normal' ? 590 : 440}
      overflow="hidden"
      borderRadius={10}
      elevation={5}
      backgroundColor="$pure_white"
      {...rest}
    >
      <YStack
        justifyContent="center"
        width={size === 'normal' ? 550 : 370}
        gap={size === 'normal' ? 60 : 40}
      >
        <Image
          resizeMode="contain"
          width="100%"
          maxWidth={300}
          source={{
            height: 72,
            uri: brandImage,
          }}
        />
        <H5 ellipse color="$black" fontWeight="bold" textAlign="center">
          {title}
        </H5>
        <Button
          variant="outlined"
          title="explore"
          alignSelf="center"
          paddingVertical={10}
          borderRadius={10}
          borderColor="$black"
          fontSize="$5"
          color="$black"
        />
      </YStack>
      <Image
        source={{
          width: size === 'normal' ? 600 : 410,
          height: size === 'normal' ? 590 : 440,
          uri: image,
        }}
      />
    </XStack>
  )
}

export default OfferCard
