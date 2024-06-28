import { ImageURISource } from 'react-native'
import { Image, XStack, YStack, YStackProps, getTokenValue } from 'tamagui'

import { Rating, Text } from '@shared/components'

import { placeholderImagePath } from '../../assets/images'
import { TReview } from '@shared/types'

export type CommentProps = YStackProps &
  TReview & {
    images: Array<ImageURISource['uri']>
  }

const Comment = ({ rating, content, reviewer, date, images, ...rest }: CommentProps) => {
  return (
    <YStack maxWidth={900} {...rest}>
      <XStack alignItems="center">
        <Rating numberOfStarts={rating} />
        <Text fontSize="$3">{rating}</Text>
      </XStack>
      <Text whiteSpace="normal">{content}</Text>
      <XStack gap={20}>
        {images.map((img) => (
          <Image
            resizeMode="contain"
            alignSelf="center"
            borderRadius={10}
            source={{
              width: getTokenValue('$commentImage.width'),
              height: getTokenValue('$commentImage.height'),
              uri: img,
            }}
            defaultSource={{
              width: getTokenValue('$commentImage.width'),
              height: getTokenValue('$commentImage.height'),
              uri: placeholderImagePath,
            }}
          />
        ))}
      </XStack>
      <XStack gap={5}>
        <Text fontSize="$3">{reviewer}</Text>
        <Text fontSize="$3">{date.toDateString()}</Text>
      </XStack>
    </YStack>
  )
}

export default Comment
