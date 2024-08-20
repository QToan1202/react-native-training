import { getTokenValue, XStack, YStack, YStackProps } from 'tamagui'

import { Avatar, Rating, Text } from '@practice-three/components'

import { Star } from '../../assets/images'

export type ReviewProps = YStackProps & {
  image: string
  rating: number
  content: string
}

const Review = ({ image = '', rating = 0, content = '', ...rest }: ReviewProps) => {
  return (
    <YStack
      maxWidth={getTokenValue('$review.width')}
      maxHeight={getTokenValue('$review.height')}
      justifyContent="center"
      alignItems="center"
      paddingVertical={58}
      paddingHorizontal={32}
      gap={24}
      backgroundColor="$pure_white"
      elevation={5}
      {...rest}
    >
      <Avatar circular width={150} image={image} />
      <XStack alignItems="center">
        <Rating
          defaultValue={rating}
          icon={<Star />}
          emptyIcon={<Star fill={getTokenValue('$color.transparent')} />}
          isDisabled
        />
        <Text fontSize="$3" color="$pure_black">
          {rating}
        </Text>
      </XStack>
      <Text numberOfLines={5} fontSize="$5" textAlign="center">
        {content}
      </Text>
    </YStack>
  )
}

export default Review
