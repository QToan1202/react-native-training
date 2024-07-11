import { styled } from 'tamagui'
import { Star, StarFull } from '@tamagui/lucide-icons'
import { GetThemeValueForKey } from '@tamagui/core'
import { useId, useState } from 'react'

import { Radio, RadioItem } from '../Radio'

const Item = styled(RadioItem, {
  borderWidth: 0,
  backgroundColor: 'transparent',
  animation: 'fast',

  focusStyle: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  hoverStyle: {
    scale: 1.8,
    backgroundColor: 'transparent',
  },

  variants: {
    disabled: {
      true: {
        hoverStyle: {
          scale: 1,
        },
      },
    },
  } as const,
  defaultVariants: { disabled: false },
})

export type RatingProps = {
  color?: GetThemeValueForKey<'color'>
  isDisabled?: boolean
  defaultValue?: number
  numberOfStarts?: number
}

const Rating = ({
  isDisabled = false,
  defaultValue = 0,
  numberOfStarts = 0,
  color = '$yellow10Light',
}: RatingProps) => {
  const key = useId()
  const [rating, setRating] = useState<number>(Math.floor(defaultValue))
  const handleChange = (value: string) => setRating(Number(value))

  return (
    <Radio value={String(rating)} onValueChange={handleChange} flexDirection="row" gap="$1">
      {[...Array(Math.floor(numberOfStarts) + 1).keys()].slice(1).map((value: number) => (
        <Item disabled={isDisabled} key={key + value} value={value.toString()}>
          {rating < value ? <Star color={color} /> : <StarFull color={color} />}
        </Item>
      ))}
    </Radio>
  )
}

export default Rating
