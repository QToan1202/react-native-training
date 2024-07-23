import { ReactNode, useId, useState } from 'react'
import { styled } from 'tamagui'
import { getTokenValue } from '@tamagui/core'

import { Radio, RadioItem } from '../Radio'
import { Star } from '../../assets/images'

const Item = styled(RadioItem, {
  borderWidth: 0,
  backgroundColor: 'transparent',
  animation: 'fast',
  cursor: 'pointer',

  focusStyle: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  hoverStyle: {
    scale: 1.5,
    backgroundColor: 'transparent',
  },

  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  } as const,
  defaultVariants: { disabled: false },
})

export type RatingProps = {
  isDisabled?: boolean
  defaultValue?: number
  numberOfStarts?: number
  icon?: ReactNode
  emptyIcon?: ReactNode
}

const Rating = ({
  isDisabled = false,
  defaultValue = 0,
  numberOfStarts = 5,
  icon = <Star fill={getTokenValue('$yellow')} stroke={getTokenValue('$yellow')} />,
  emptyIcon = <Star />,
}: RatingProps) => {
  const key = useId()
  const [rating, setRating] = useState<number>(Math.floor(defaultValue))
  const handleChange = (value: string) => setRating(Number(value))

  return (
    <Radio value={String(rating)} onValueChange={handleChange} flexDirection="row" gap="$1">
      {[...Array(Math.floor(numberOfStarts) + 1).keys()].slice(1).map((value: number) => (
        <Item disabled={isDisabled} key={key + value} value={value.toString()}>
          {rating < value ? emptyIcon : icon}
        </Item>
      ))}
    </Radio>
  )
}

export default Rating
