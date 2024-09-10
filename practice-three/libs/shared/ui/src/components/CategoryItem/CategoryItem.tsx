import { FC } from 'react'
import { ImageURISource } from 'react-native'
import { H2, Square, XStack, YStack, YStackProps } from 'tamagui'

import { Text } from '../Text'
import { Image } from '../Image'
import { Arrow } from '@practice-three/shared/asset'

export type CategoryItemProps = YStackProps & {
  title: string
  image: ImageURISource['uri'] | FC
}
const imageStyles = {
  '$platform-web': { filter: 'brightness(70%)' },
  borderRadius: 10,
  flex: 1,
  width: '100%',
}
const CategoryItem = ({ title, image: ImageSvg, ...rest }: CategoryItemProps) => {
  const renderImage =
    typeof ImageSvg === 'function' ? (
      <Square {...imageStyles}>
        <ImageSvg />
      </Square>
    ) : (
      <Image
        {...imageStyles}
        source={{
          uri: ImageSvg,
        }}
      />
    )

  return (
    <YStack
      hoverStyle={{
        cursor: 'pointer',
      }}
      flex={1}
      width={'100%'}
      {...rest}
    >
      <YStack position="absolute" top={24} left={30} zIndex={10}>
        <H2 ellipse color="$pure_white" fontSize="$5" fontWeight="bold" textTransform="capitalize">
          {title}
        </H2>
        <XStack alignItems="center" gap={5}>
          <Text color="$pure_white" fontSize="$3" fontWeight="bold">
            Explore
          </Text>
          <Arrow />
        </XStack>
      </YStack>
      {renderImage}
    </YStack>
  )
}

export default CategoryItem
