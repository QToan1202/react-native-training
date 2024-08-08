import { ReactNode, useCallback, useMemo, useRef } from 'react'
import { Control, FieldValues, Path, UseControllerProps, useController } from 'react-hook-form'
import { Square, SquareProps, Input as TInput } from 'tamagui'
import { getTokenValue } from '@tamagui/core'

import StyledInput, { StyledInputProps } from './StyledInput'
import InputWrapper, { StyledWrapperProps } from './StyledWrapper'

export type InputProps<T extends FieldValues> = StyledInputProps & {
  label: Path<T>
  control?: Control<T>
  options?: UseControllerProps['rules']
  iconScaling?: number
  isError?: boolean
  containerStyle?: StyledWrapperProps
  startIcon?: ReactNode | ((color: string) => ReactNode)
  endIcon?: ReactNode | ((color: string) => ReactNode)
}

const Input = <T extends FieldValues>({
  label,
  options,
  control,
  containerStyle,
  disabled,
  iconScaling = 1,
  isError = false,
  startIcon: startIconProp,
  endIcon: endIconProp,
  ...rest
}: InputProps<T>) => {
  const { field } = useController<T>({
    control,
    name: label,
    rules: options,
  })
  const inputRef = useRef<TInput>(null)
  const createIconComponent = useCallback(
    (iconProp: ReactNode | ((color: string) => ReactNode), iconContainerStyle: SquareProps) => {
      if (!iconProp) return null

      if (typeof iconProp === 'function') {
        return (
          <Square {...iconContainerStyle} scale={iconScaling}>
            {isError ? iconProp(getTokenValue('$color.red_50')) : iconProp('none')}
          </Square>
        )
      }

      return (
        <Square {...iconContainerStyle} scale={iconScaling}>
          {iconProp}
        </Square>
      )
    },
    [iconScaling, isError]
  )

  const startIcon = useMemo(
    () => createIconComponent(startIconProp, { marginLeft: 20, marginRight: -4 }),
    [createIconComponent, startIconProp]
  )
  const endIcon = useMemo(
    () => createIconComponent(endIconProp, { marginLeft: -4, marginRight: 20 }),
    [createIconComponent, endIconProp]
  )
  return (
    <InputWrapper
      disabled={disabled}
      variant={isError ? 'error' : disabled ? 'disabled' : undefined}
      {...containerStyle}
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
        disabled={disabled}
        {...rest}
      />
      {endIcon}
    </InputWrapper>
  )
}

export default Input
