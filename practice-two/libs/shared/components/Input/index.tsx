import { forwardRef, memo, useCallback, useState } from 'react'
import isEqual from 'react-fast-compare'
import { Control, UseControllerProps, useController } from 'react-hook-form'
import { Stack, StackProps } from 'tamagui'
import { TextInput } from 'react-native'

import { ErrorMessage, IForm } from '@practice-two/shared'

import { Label, StyledInput, StyledInputProps } from './styles'

export type InputProps = StyledInputProps & {
  name: keyof IForm
  control: Control<IForm>
  label?: string
  rules?: UseControllerProps['rules']
  isShowError?: boolean
  containerStyle?: StackProps
}

const Input = forwardRef<TextInput, InputProps>(
  ({ label, name, control, rules, isShowError = false, containerStyle, ...rest }, ref) => {
    const {
      field,
      formState: { errors },
    } = useController<IForm>({
      control,
      defaultValue: '',
      name,
      rules,
    })
    const [isInputFocus, setIsInputFocus] = useState<boolean>(false)
    const handleFocusInput = useCallback(() => setIsInputFocus(true), [])
    const handleBlurInput = useCallback(() => setIsInputFocus(false), [])

    return (
      <Stack w="100%" pos="relative" {...containerStyle}>
        {label && <Label forceStyle={isInputFocus ? 'focus' : 'press'}>{label}</Label>}
        <StyledInput
          ref={ref}
          hasLabel={!!label}
          value={String(field.value)}
          onChangeText={field.onChange}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          {...rest}
        />
        {isShowError && <ErrorMessage pos="absolute" bottom={-20} left={10} error={errors[name]} />}
      </Stack>
    )
  }
)

export default memo(Input, isEqual)
