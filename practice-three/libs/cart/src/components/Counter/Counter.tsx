import { useState } from 'react'
import { styled, XStack, XStackProps } from 'tamagui'

import { IconButton as BaseIconButton, BaseInput, BaseInputProps } from '@shared/components'

import { Minus, Plus } from '../../assets/images'

export type CounterProps = Omit<BaseInputProps, 'defaultValue'> & {
  defaultValue?: number
  containerStyle?: XStackProps
}

const IconButton = styled(BaseIconButton, {
  borderWidth: 1,
  borderColor: '$pale',
  padding: 12,
  backgroundColor: '$pure_white',
  variants: {
    border: {
      left: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
      right: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      },
    },
  },
  defaultVariants: {
    border: 'left',
  },
})

const Counter = ({ defaultValue = 1, containerStyle, onChangeText, ...rest }: CounterProps) => {
  const [num, setNum] = useState<number>(defaultValue)
  const handleMinus = () => setNum((prevNum) => (prevNum ? prevNum - 1 : prevNum))
  const handleAdd = () => setNum((prevNum) => prevNum + 1)
  const handleEnterCounter = (value: string) => {
    onChangeText?.(value)

    setNum(+value)
  }

  return (
    <XStack display="inline-flex" borderRadius={7} backgroundColor="$pale" {...containerStyle}>
      <IconButton border="left" onPress={handleMinus}>
        <Minus />
      </IconButton>
      <BaseInput
        maxWidth={40}
        paddingHorizontal={0}
        textAlign="center"
        inputMode="numeric"
        keyboardType="number-pad"
        value={String(num)}
        onChangeText={handleEnterCounter}
        {...rest}
      />
      <IconButton border="right" onPress={handleAdd}>
        <Plus />
      </IconButton>
    </XStack>
  )
}

export default Counter
