import { forwardRef, ReactNode, useCallback, useMemo, useRef } from 'react'
import { Square, SquareProps, Input as TInput, getTokenValue } from 'tamagui'

import { mergeRefs } from '@practice-three/shared/util'

import StyledInput, { StyledInputProps } from './StyledInput'
import InputWrapper, { StyledWrapperProps } from './StyledWrapper'

export type InputProps = StyledInputProps & {
  iconScaling?: number
  isError?: boolean
  containerStyle?: StyledWrapperProps
  startIcon?: ReactNode | ((color: string) => ReactNode)
  endIcon?: ReactNode | ((color: string) => ReactNode)
}

const Input = forwardRef<TInput, InputProps>(
  (
    {
      containerStyle,
      disabled,
      iconScaling = 1,
      isError = false,
      startIcon: startIconProp,
      endIcon: endIconProp,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<TInput>(null)
    const createIconComponent = useCallback(
      (iconProp: ReactNode | ((color: string) => ReactNode), iconContainerStyle: SquareProps) => {
        if (!iconProp) return null

        if (typeof iconProp === 'function') {
          return (
            <Square cursor="pointer" {...iconContainerStyle} scale={iconScaling}>
              {isError
                ? iconProp(getTokenValue('$color.red_50'))
                : iconProp(getTokenValue('$color.gray_100'))}
            </Square>
          )
        }

        return (
          <Square cursor="pointer" {...iconContainerStyle} scale={iconScaling}>
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
        <StyledInput ref={mergeRefs(ref, inputRef)} disabled={disabled} {...rest} />
        {endIcon}
      </InputWrapper>
    )
  }
)

export default Input
