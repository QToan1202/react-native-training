import { ReactNode, useRef } from 'react'
import { Control, Path, UseControllerProps, useController } from 'react-hook-form'
import { Square, XStack, Input as TInput } from 'tamagui'

import StyledInput, { StyledInputProps } from './StyledInput'
import { TFormValues } from '../../types'

export type InputProps = StyledInputProps & {
  label: Path<TFormValues>
  control?: Control<TFormValues>
  options?: UseControllerProps['rules']
  iconScaling?: number
  startIcon?: ReactNode
  endIcon?: ReactNode
}

const Input = ({
  label,
  options,
  control,
  iconScaling = 1,
  startIcon: startIconProp,
  endIcon: endIconProp,
  ...rest
}: InputProps) => {
  const { field } = useController<TFormValues>({
    control,
    defaultValue: '',
    name: label,
    rules: options,
  })
  const inputRef = useRef<TInput>(null)
  const startIcon = startIconProp && (
    <Square scale={iconScaling} marginRight={20} marginLeft={14}>
      {startIconProp}
    </Square>
  )
  const endIcon = endIconProp && (
    <Square scale={iconScaling} marginRight={14} marginLeft={20}>
      {endIconProp}
    </Square>
  )

  return (
    <XStack
      borderRadius={12}
      borderWidth={1}
      borderColor="$border"
      onPress={() => {
        inputRef.current?.focus()
      }}
    >
      {startIcon}
      <StyledInput
        ref={inputRef}
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        {...rest}
      />
      {endIcon}
    </XStack>
  )
}

export default Input
