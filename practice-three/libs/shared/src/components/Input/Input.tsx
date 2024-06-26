import { ReactNode, useCallback, useMemo, useRef } from 'react'
import { Control, Path, UseControllerProps, useController } from 'react-hook-form'
import { Square, SquareProps, Input as TInput } from 'tamagui'
import { getTokenValue } from '@tamagui/core'

import StyledInput, { StyledInputProps } from './StyledInput'
import { TFormValues } from '../../types'
import InputWrapper from './StyledWrapper'

export type InputProps = StyledInputProps & {
  label: Path<TFormValues>
  control?: Control<TFormValues>
  options?: UseControllerProps['rules']
  iconScaling?: number
  startIcon?: ReactNode | ((color: string) => ReactNode)
  endIcon?: ReactNode | ((color: string) => ReactNode)
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
