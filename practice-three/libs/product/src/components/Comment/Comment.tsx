import { ImageURISource, ScrollView } from 'react-native'
import { Separator, XStack, YStack, YStackProps, useWindowDimensions, getTokenValue } from 'tamagui'
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
    <YStack maxWidth={width} gap={9} {...rest}>
      <XStack alignItems="center" gap={12}>
        <Rating defaultValue={rating} numberOfStarts={5} isDisabled />
        <Text fontSize="$3">{rating}</Text>
      </XStack>
      <ReadMore fontSize="$3">{content}</ReadMore>
      <ScrollView horizontal contentContainerStyle={{ width: width - 50 }}>
        <ImageGallery
          images={images}
          width={getTokenValue('$commentImage.width')}
          height={getTokenValue('$commentImage.height')}
        />
      </ScrollView>
      <XStack>
        <Text fontSize="$3">{reviewer}</Text>
        <Separator alignSelf="stretch" vertical marginHorizontal={8} />
        <Text fontSize="$3">{dayjs(date).format('DD MMMM')}</Text>
      </XStack>
    </YStack>
  )
}

export default Comment
