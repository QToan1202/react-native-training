import { Text } from '@shared/components'
import { Card, CardProps, H5, Image, YStack, getTokenValue } from 'tamagui'
import { placeholderImagePath } from '../../assets/images'
import { ImageURISource } from 'react-native'

export type DealCardProps = CardProps & {
  image: ImageURISource['uri']
  brandImage: ImageURISource['uri']
  title: string
  description?: string
}

export const DealCard = ({ image, brandImage, title, description, ...rest }: DealCardProps) => {
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
          resizeMode="cover"
          alignSelf="center"
          source={{
            width: getTokenValue('$deal.width'),
            height: 300,
            uri: image,
          }}
          defaultSource={{
            width: getTokenValue('$deal.width'),
            height: 300,
            uri: placeholderImagePath,
          }}
        />
        <Image
          resizeMode="cover"
          alignSelf="center"
          borderRadius={10}
          source={{
            width: 150,
            height: 62,
            uri: brandImage,
          }}
          defaultSource={{
            width: 150,
            height: 62,
            uri: placeholderImagePath,
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
