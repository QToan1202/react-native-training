import { useState } from 'react'
import { styled, useDebounce, XStack, XStackProps } from 'tamagui'

import {
  AlertDialog,
  IconButton as BaseIconButton,
  BaseInput,
  BaseInputProps,
} from '@practice-three/shared/ui'
import { useAuthStore } from '@practice-three/shared/context'
import { ENDPOINTS } from '@practice-three/shared/constant'

import { Minus, Plus } from '../../assets/images'
import { useDeleteCartItem, useUpdateCartQuantity } from '../../hooks'

export type CounterProps = Omit<BaseInputProps, 'defaultValue'> & {
  productId: string
  defaultValue?: number
  containerStyle?: XStackProps
}

const IconButton = styled(BaseIconButton, {
  borderWidth: 1,
  borderColor: '$pale',
  padding: 0,
  paddingHorizontal: 12,
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
  const user = useAuthStore((state) => state.user)
  const [num, setNum] = useState<number>(defaultValue)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { mutate: updateItemQuantity } = useUpdateCartQuantity(ENDPOINTS.CART, user?.id || '')
  const { mutate: removeItemFromCart } = useDeleteCartItem(ENDPOINTS.CART, user?.id || '')
  const debounceUpdateItemQuantity = useDebounce(updateItemQuantity, 500)

  const handleMinus = () =>
    setNum((prevNum) => {
      if (prevNum <= 1) {
        setIsOpen(true)
        return prevNum
      }

      debounceUpdateItemQuantity({ id: productId, quantity: prevNum - 1 })

      return prevNum - 1
    })
  const handleAdd = () =>
    setNum((prevNum) => {
      debounceUpdateItemQuantity({ id: productId, quantity: prevNum + 1 })

      return prevNum + 1
    })
  const handleEnterCounter = (value: string) => {
    onChangeText?.(value)

    debounceUpdateItemQuantity({ id: productId, quantity: +value })

    setNum(+value)
  }
  const handleCancelAlert = () => {
    setIsOpen(false)
  }

  const handleSuccessAlert = () => {
    handleCancelAlert()
    removeItemFromCart(productId)
  }

  return (
    <XStack alignSelf="baseline" borderRadius={7} backgroundColor="$pale" {...containerStyle}>
      <IconButton border="left" onPress={handleMinus}>
        <Minus />
      </IconButton>
      <BaseInput
        width={40}
        height={24}
        padding={0}
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

      {isOpen && (
        <AlertDialog
          title="Remove product"
          open={isOpen}
          description="Are you sure you want to delete this item from your cart? This action cannot be undone."
          onCancel={handleCancelAlert}
          onSuccess={handleSuccessAlert}
        />
      )}
    </XStack>
  )
}

export default Counter
