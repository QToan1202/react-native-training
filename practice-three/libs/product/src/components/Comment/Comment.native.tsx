import { ImageURISource } from 'react-native'
import { XStack, YStack, YStackProps, getTokenValue } from 'tamagui'
import dayjs from 'dayjs'

import { ImageGallery, Rating, ReadMore, Text } from '@shared/components'
import { TReview } from '@shared/types'

export type CommentProps = YStackProps &
  TReview & {
    images: Array<ImageURISource['uri']>
  }

const Comment = ({ rating, content, reviewer, date, images, ...rest }: CommentProps) => {
  return (
    <YStack maxWidth={900} {...rest}>
      <XStack alignItems="center" gap={12}>
        <Rating defaultValue={rating} numberOfStarts={5} isDisabled />
        <Text>{rating}</Text>
        <Text>{reviewer}</Text>
        <Text>{dayjs(date).format('DD MMMM')}</Text>
      </XStack>
      <ReadMore>{content}</ReadMore>

      <XStack gap={20}>
        <ImageGallery
          images={images}
          width={getTokenValue('$commentImage.width')}
          height={getTokenValue('$commentImage.height')}
        />
      </XStack>
    </YStack>
  )
}

export default Comment
