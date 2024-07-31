import { useState } from 'react'
import { styled, XStack, XStackProps } from 'tamagui'
import { useShallow } from 'zustand/react/shallow'

import {
  AlertDialog,
  IconButton as BaseIconButton,
  BaseInput,
  BaseInputProps,
} from '@shared/components'

import { Minus, Plus } from '../../assets/images'
import { useCartStore } from '@shared/contexts'

export type CounterProps = Omit<BaseInputProps, 'defaultValue'> & {
  productId: string
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

const Counter = ({
  defaultValue = 1,
  containerStyle,
  onChangeText,
  productId,
  ...rest
}: CounterProps) => {
  const [num, setNum] = useState<number>(defaultValue)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [remove, update] = useCartStore(useShallow((state) => [state.remove, state.update]))
  const handleMinus = () =>
    setNum((prevNum) => {
      if (prevNum <= 1) {
        setIsOpen(true)
        return prevNum
      }

      update(productId, prevNum - 1)
      return prevNum - 1
    })
  const handleAdd = () =>
    setNum((prevNum) => {
      update(productId, prevNum + 1)
      return prevNum + 1
    })
  const handleEnterCounter = (value: string) => {
    onChangeText?.(value)

    update(productId, +value)
    setNum(+value)
  }

  const handleCancelAlert = () => {
    setIsOpen(false)
  }

  const handleSuccessAlert = () => {
    handleCancelAlert()
    remove(productId)
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

      <AlertDialog
        title="Remove product"
        open={isOpen}
        description="Are you sure you want to delete this item from your cart? This action cannot be undone."
        onCancel={handleCancelAlert}
        onSuccess={handleSuccessAlert}
      />
    </XStack>
  )
}

export default Counter
