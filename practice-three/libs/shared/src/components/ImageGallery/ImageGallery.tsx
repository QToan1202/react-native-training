import { ImageURISource } from 'react-native'
import { getTokenValue, View, XStack } from 'tamagui'

import { Image } from '../Image'
import styles from './ImageGallery.module.css'
import { Text } from '../Text'
import { useMemo, useState } from 'react'

export type ImageGalleryProps = {
  images: Array<ImageURISource['uri']>
  numberOfImg?: number
}

const ImageGallery = ({ images, numberOfImg = 3 }: ImageGalleryProps) => {
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
          opacity={0.5}
          source={{
            width: getTokenValue('$card.width'),
            height: 300,
            uri: images[numberOfImg - 1],
          }}
        />
      </View>
    ),
    [images, numberOfImg]
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
          source={{
            width: getTokenValue('$card.width'),
            height: 300,
            uri: image,
          }}
        />
      )),
    [isExpand, images, numberOfImg]
  )

  return (
    <XStack
      gap={12}
      flexWrap="nowrap"
      $platform-web={{ overflowX: 'scroll' }}
      className={styles['scroll']}
      onPress={handleToggleImages}
    >
      {renderGallery}
      {isExpand ? null : images.length > numberOfImg && renderOverlayOnLastImage}
    </XStack>
  )
}

export default ImageGallery
