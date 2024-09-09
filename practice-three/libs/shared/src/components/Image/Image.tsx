import { ImageURISource } from 'react-native'
import { Image as TImage, ImageProps as TImageProps } from 'tamagui'
import { isAndroid } from '@tamagui/core'

import { placeholderImagePath } from '../../assets/images'

export type ImageProps = TImageProps & {
  source: ImageURISource
  fallbackImage?: ImageURISource['uri']
}

const Image = ({ fallbackImage = placeholderImagePath, ...props }: ImageProps) => {
  return (
    <TImage
      resizeMode="cover"
      alignSelf="center"
      {...(!isAndroid && {
        defaultSource: {
          width: props.source.width,
          height: props.source.height,
          uri: fallbackImage,
        },
      })}
      {...props}
    />
  )
}

export default Image
