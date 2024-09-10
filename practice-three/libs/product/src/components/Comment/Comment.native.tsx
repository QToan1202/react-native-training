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

import { ImageGallery, Rating, ReadMore, Text } from '@practice-three/shared/ui'
import { TReview } from '@practice-three/shared/types'
import { Star } from '../../assets/images'

export type CommentProps = YStackProps &
  TReview & {
    images: Array<ImageURISource['uri']>
  }

const Comment = ({ rating, content, reviewer, date, images, ...rest }: CommentProps) => {
  const { width } = useWindowDimensions()

  return (
    <YStack maxWidth={width} {...rest}>
      <XStack alignItems="center" gap={12}>
        <Rating
          defaultValue={rating}
          icon={
            <Star
              width={16}
              height={16}
              fill={getTokenValue('$yellow')}
              stroke={getTokenValue('$yellow')}
            />
          }
          emptyIcon={<Star width={16} height={16} />}
          isDisabled
        />
        <Text>{rating}</Text>
        <Text color="$gray_100">{reviewer}</Text>
        <Text color="$gray_100">{dayjs(date).format('DD MMMM YYYY')}</Text>
      </XStack>
      <ReadMore paddingRight={15}>{content}</ReadMore>

      <ScrollView horizontal contentContainerStyle={{ width: width - 50 }}>
        <ImageGallery
          images={images}
          width={getTokenValue('$commentImage.mobileWidth')}
          height={getTokenValue('$commentImage.mobileHeight')}
        />
      </ScrollView>
    </YStack>
  )
}

export default Comment
