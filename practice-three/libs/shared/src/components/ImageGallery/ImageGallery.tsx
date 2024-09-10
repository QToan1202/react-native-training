import { useState } from 'react'
import { ImageURISource } from 'react-native'
import { useWindowDimensions, XStack } from 'tamagui'

import { Image, ImageProps } from '../Image'
import { Text } from '../Text'
import { Carousel } from '../Carousel'

export type ImageGalleryProps = Omit<ImageProps, 'source'> & {
  images: Array<ImageURISource['uri']>
  width: number
  height: number
  numberOfImg?: number
}

const ImageGallery = ({ images, width, height, numberOfImg = 3, ...rest }: ImageGalleryProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false)
  const { width: windowWidth } = useWindowDimensions()
  const handleExpandImages = () => setIsExpand((prev) => !prev)
  const transformData = isExpand
    ? images
    : images.length > numberOfImg
    ? images.slice(0, numberOfImg)
    : images

  return (
    <Carousel
      isShowIndex={false}
      loop={false}
      width={width + 10}
      height={height}
      data={transformData}
      style={{
        width: windowWidth,
      }}
      renderItem={({ item, index }) => (
        <XStack borderRadius={10} overflow="hidden" width={width}>
          <Image
            cursor="pointer"
            flex={1}
            {...rest}
            source={{
              height,
              uri: item,
            }}
          />
          {isExpand
            ? null
            : index === transformData.length - 1 &&
              images.length > numberOfImg && (
                <XStack
                  key={item}
                  position="absolute"
                  inset={0}
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor="$imageOverlay"
                  onPress={handleExpandImages}
                >
                  <Text fontSize={28} color="$pure_white">
                    &#43; {images.length - numberOfImg}
                  </Text>
                </XStack>
              )}
        </XStack>
      )}
    />
  )
}

export default ImageGallery
