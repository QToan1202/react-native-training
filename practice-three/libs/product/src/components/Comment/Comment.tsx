import { ImageURISource } from 'react-native'
import { Image, Separator, XStack, YStack, YStackProps, getTokenValue } from 'tamagui'

import { Rating, ReadMore, Text } from '@shared/components'
import { TReview } from '@shared/types'

import { placeholderImagePath } from '../../assets/images'

export type CommentProps = YStackProps &
  TReview & {
    images: Array<ImageURISource['uri']>
  }

const Comment = ({ rating, content, reviewer, date, images, ...rest }: CommentProps) => {
  return (
    <YStack maxWidth={900} {...rest}>
      <XStack alignItems="center" gap={12}>
        <Rating defaultValue={rating} numberOfStarts={5} isDisabled />
        <Text fontSize="$3">{rating}</Text>
      </XStack>
      <ReadMore fontSize="$3">{content}</ReadMore>
      <XStack gap={20}>
        {images.map((img) => (
          <Image
            resizeMode="contain"
            alignSelf="center"
            borderRadius={10}
            key={img}
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
      <XStack>
        <Text fontSize="$3">{reviewer}</Text>
        <Separator alignSelf="stretch" vertical marginHorizontal={8} />
        <Text fontSize="$3">{date.toDateString()}</Text>
      </XStack>
    </YStack>
  )
}

export default Comment
