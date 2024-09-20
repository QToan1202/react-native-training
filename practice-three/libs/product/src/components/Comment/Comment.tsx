import { ImageURISource } from 'react-native'
import { Separator, XStack, YStack, YStackProps, getTokenValue } from 'tamagui'
import dayjs from 'dayjs'

import { ImageGallery, Rating, ReadMore, Text } from '@practice-three/shared/ui'
import { TReview } from '@practice-three/shared/types'

export type CommentProps = YStackProps &
  TReview & {
    images: Array<ImageURISource['uri']>
  }

const Comment = ({ rating, content, reviewer, date, images, ...rest }: CommentProps) => (
  <YStack flex={1} gap={9} {...rest}>
    <XStack alignItems="center" gap={12}>
      <Rating defaultValue={rating} isDisabled />
      <Text fontSize="$3">{rating}</Text>
    </XStack>
    <ReadMore fontSize="$3">{content}</ReadMore>
    <ImageGallery
      images={images}
      width={getTokenValue('$commentImage.width')}
      height={getTokenValue('$commentImage.height')}
    />
    <XStack>
      <Text fontSize="$3">{reviewer}</Text>
      <Separator alignSelf="stretch" vertical marginHorizontal={8} />
      <Text fontSize="$3">{dayjs(date).format('DD MMMM')}</Text>
    </XStack>
  </YStack>
)

export default Comment
