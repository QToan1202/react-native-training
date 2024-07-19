import { ImageURISource } from 'react-native'
import {
  ScrollView,
  XStack,
  YStack,
  YStackProps,
  getTokenValue,
  useWindowDimensions,
} from 'tamagui'
import dayjs from 'dayjs'

import { ImageGallery, Rating, ReadMore, Text } from '@shared/components'
import { TReview } from '@shared/types'

export type CommentProps = YStackProps &
  TReview & {
    images: Array<ImageURISource['uri']>
  }

const Comment = ({ rating, content, reviewer, date, images, ...rest }: CommentProps) => {
  const { width } = useWindowDimensions()

  return (
    <YStack maxWidth={width} {...rest}>
      <XStack alignItems="center" gap={12}>
        <Rating defaultValue={rating} numberOfStarts={5} isDisabled />
        <Text>{rating}</Text>
        <Text color="$gray_100">{reviewer}</Text>
        <Text color="$gray_100">{dayjs(date).format('DD MMMM YYYY')}</Text>
      </XStack>
      <ReadMore>{content}</ReadMore>

      <ScrollView horizontal contentContainerStyle={{ width: width - 50 }}>
        <ImageGallery
          images={images}
          width={getTokenValue('$commentImage.width')}
          height={getTokenValue('$commentImage.height')}
        />
      </ScrollView>
    </YStack>
  )
}

export default Comment
