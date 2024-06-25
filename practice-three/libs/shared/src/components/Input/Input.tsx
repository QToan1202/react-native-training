import { ReactNode, useRef } from 'react'
import { Control, Path, UseControllerProps, useController } from 'react-hook-form'
import { Square, Input as TInput } from 'tamagui'

import StyledInput, { StyledInputProps } from './StyledInput'
import { TFormValues } from '../../types'
import InputWrapper from './StyledWrapper'

export type InputProps = StyledInputProps & {
  label: Path<TFormValues>
  control?: Control<TFormValues>
  options?: UseControllerProps['rules']
  iconScaling?: number
  startIcon?: ReactNode
  endIcon?: ReactNode
  isError?: boolean
}

const Input = ({
  label,
  options,
  control,
  iconScaling = 1,
  isError = false,
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
    <Square scale={iconScaling} marginLeft={20} marginRight={-4}>
      {startIconProp}
    </Square>
  )
  const endIcon = endIconProp && (
    <Square scale={iconScaling} marginLeft={-4} marginRight={20}>
      {endIconProp}
    </Square>
  )

  return (
    <InputWrapper
      variant={isError ? 'error' : 'normal'}
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
    </InputWrapper>
  )
}

export default Input
