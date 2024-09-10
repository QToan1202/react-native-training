import { FC } from 'react'
import { ImageURISource } from 'react-native'
import { CardProps, getTokenValue, Heading, Square, YStack } from 'tamagui'

import { Image } from '../Image'

export type CategoryItemProps = CardProps & {
  title: string
  image: ImageURISource['uri'] | FC
}

export const CategoryItem = ({ title, image: ImageSvg, ...rest }: CategoryItemProps) => {
  const imageSizes = {
    width: getTokenValue('$category.width'),
    height: getTokenValue('$category.height'),
  }
  const renderImage =
    typeof ImageSvg === 'function' ? (
      <Square overflow="hidden" borderRadius={50} {...imageSizes}>
        <ImageSvg />
      </Square>
    ) : (
      <Image
        overflow="hidden"
        borderRadius={50}
        source={{
          ...imageSizes,
          uri: ImageSvg,
        }}
      />
    )

  return (
    <YStack
      borderRadius={50}
      width={getTokenValue('$category.containerWidth')}
      height={getTokenValue('$category.containerHeight')}
      justifyContent="center"
      alignItems="center"
      hoverStyle={{
        cursor: 'pointer',
      }}
      gap={10}
      {...rest}
    >
      {renderImage}
      <Heading ellipse numberOfLines={1} color="$pure_black" textTransform="capitalize">
        {title}
      </Heading>
    </YStack>
  )
}

export default CategoryItem
