import { ImageURISource } from 'react-native'
import { Card, CardProps, H5, YStack, getTokenValue } from 'tamagui'

import { Image, Text } from '@practice-three/shared/ui'

export type DealCardProps = CardProps & {
  image: ImageURISource['uri']
  brandImage: ImageURISource['uri']
  title: string
  description?: string
}

const DealCard = ({ image, brandImage, title, description, ...rest }: DealCardProps) => {
  return (
    <Card
      width={getTokenValue('$deal.width')}
      height={getTokenValue('$deal.height')}
      borderRadius={10}
      overflow="hidden"
      backgroundColor="$pure_white"
      {...rest}
    >
      <YStack gap={30}>
        <Image
          source={{
            width: getTokenValue('$deal.width'),
            height: 300,
            uri: image,
          }}
        />
        <Image
          source={{
            width: 155,
            height: 62,
            uri: brandImage,
          }}
        />
      </YStack>
      <Card.Footer justifyContent="center" paddingVertical={45}>
        <YStack gap={24}>
          <H5 ellipse color="$black" fontWeight="bold">
            {title}
          </H5>
          {description && (
            <Text ellipse fontSize="$5" fontWeight="bold" textAlign="center">
              {description}
            </Text>
          )}
        </YStack>
      </Card.Footer>
    </Card>
  )
}

export default DealCard
