import { styled } from 'tamagui'
import { Radio, RadioItem } from '../Radio'
import { Star, StarFull } from '@tamagui/lucide-icons'
import { useId, useState } from 'react'

const Item = styled(RadioItem, {
  borderWidth: 0,
  backgroundColor: '$transparent',

  focusStyle: {
    borderWidth: 0,
    backgroundColor: '$transparent',
  },
})

export type RatingProps = {
  numberOfStarts?: number
}

const Rating = ({ numberOfStarts = 0 }: RatingProps) => {
  const key = useId()
  const [rating, setRating] = useState('')
  const handleChange = (value: string) => setRating(value)

  return (
    <Radio value={rating} onValueChange={handleChange} flexDirection="row" gap="$1">
      {[...Array(Math.floor(numberOfStarts) + 1).keys()].slice(1).map((value: number) => (
        <Item key={key + value} value={value.toString()}>
          {Number(rating) < value ? (
            <Star color="$yellow10Light" />
          ) : (
            <StarFull color="$yellow10Light" />
          )}
        </Item>
      ))}
    </Radio>
  )
}

export default Rating
