import { useMemo, useState } from 'react'
import { ImageURISource } from 'react-native'
import { View, XStack } from 'tamagui'

import { Image, ImageProps } from '../Image'
// import styles from './styles'
import { Text } from '../Text'

export type ImageGalleryProps = Omit<ImageProps, 'source'> & {
  images: Array<ImageURISource['uri']>
  width: number
  height: number
  numberOfImg?: number
}

const ImageGallery = ({ images, width, height, numberOfImg = 3, ...rest }: ImageGalleryProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false)
  const handleToggleImages = () => setIsExpand((prev) => !prev)
  const renderOverlayOnLastImage = useMemo(
    () => (
      <View
        position="relative"
        overflow="hidden"
        cursor="pointer"
        borderRadius={10}
        backgroundColor="black"
      >
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform={'translate(-50%, -50%)'}
          zIndex="$1"
          fontSize={48}
          color="$white"
        >
          &#43;{images.length - numberOfImg}
        </Text>
        <Image
          {...rest}
          opacity={0.5}
          source={{ ...{ width, height }, ...{ uri: images[numberOfImg - 1] } }}
        />
      </View>
    ),
    [height, images, numberOfImg, rest, width]
  )
  const renderGallery = useMemo(
    () =>
      (isExpand
        ? images
        : images.length > numberOfImg
        ? images.slice(0, numberOfImg - 1)
        : images
      ).map((image) => (
        <Image
          borderRadius={10}
          cursor="pointer"
          key={image}
          {...rest}
          source={{
            ...{ width, height },
            ...{
              uri: image,
            },
          }}
        />
      )),
    [isExpand, images, numberOfImg, rest, width, height]
  )

  return (
    <XStack gap={12} flexWrap="nowrap" className={'scroll'} onPress={handleToggleImages}>
      {renderGallery}
      {isExpand ? null : images.length > numberOfImg && renderOverlayOnLastImage}
    </XStack>
  )
}

export default ImageGallery
