import { forwardRef, memo } from 'react'
import isEqual from 'react-fast-compare'
import { Control, UseControllerProps, useController } from 'react-hook-form'
import { Stack, StackProps } from 'tamagui'
import { TextInput } from 'react-native'

import ErrorMessage from '@components/ErrorMessage'
import { IForm } from '@types'

import { Label, StyledInput, StyledInputProps } from './styles'

export type InputProps = {
  label?: string
  name: keyof IForm
  control: Control<IForm>
  rules?: UseControllerProps['rules']
  isShowError?: boolean
  inputStyle?: StyledInputProps
} & StackProps

const Input = forwardRef<TextInput, InputProps>(
  ({ label, name, control, rules, isShowError = false, inputStyle, ...rest }, ref) => {
    const {
      field,
      formState: { errors },
    } = useController<IForm>({
      control,
      defaultValue: '',
      name,
      rules,
    })

    return (
      <Stack {...rest}>
        {label && <Label>{label}</Label>}
        <StyledInput
          ref={ref}
          label={!!label}
          value={String(field.value)}
          onChangeText={field.onChange}
          {...inputStyle}
        />
        {isShowError && <ErrorMessage error={errors[name]} />}
      </Stack>
    )
  }
)

export default memo(Input, isEqual)
