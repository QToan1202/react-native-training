import { ImageURISource } from 'react-native'
import { Card, CardProps, H2, Image, XStack, YStack, getTokenValue } from 'tamagui'

import { Text } from '@practice-three/components'

import { Arrow, placeholderImagePath } from '../../assets/images'

export type CategoryItemProps = CardProps & {
  title: string
  image: ImageURISource['uri']
}

const CategoryItem = ({ title, image, ...rest }: CategoryItemProps) => {
  return (
    <Card
      maxWidth={getTokenValue('$category.width')}
      maxHeight={getTokenValue('$category.height')}
      hoverStyle={{
        cursor: 'pointer',
      }}
      {...rest}
    >
      <Card.Header>
        <YStack>
          <H2
            ellipse
            color="$pure_white"
            fontSize="$5"
            fontWeight="bold"
            textTransform="capitalize"
          >
            {title}
          </H2>
          <XStack alignItems="center" gap={5}>
            <Text color="$pure_white" fontSize="$3" fontWeight="bold">
              Explore
            </Text>
            <Arrow />
          </XStack>
        </YStack>
      </Card.Header>
      <Card.Background $platform-web={{ filter: 'brightness(50%)' }}>
        <Image
          resizeMode="cover"
          alignSelf="center"
          borderRadius={10}
          source={{
            width: getTokenValue('$category.width'),
            height: getTokenValue('$category.height'),
            uri: image,
          }}
          defaultSource={{
            width: getTokenValue('$category.width'),
            height: getTokenValue('$category.height'),
            uri: placeholderImagePath,
          }}
        />
      </Card.Background>
    </Card>
  )
}

export default CategoryItem
