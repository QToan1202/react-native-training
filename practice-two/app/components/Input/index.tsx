import { forwardRef, memo } from 'react'
import isEqual from 'react-fast-compare'
import { Control, UseControllerProps, useController } from 'react-hook-form'
import { Stack, StackProps } from 'tamagui'
import { TextInput } from 'react-native'

import ErrorMessage from '@components/ErrorMessage'
import { IForm } from '@types'

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

    return (
      <Stack w="100%" pos="relative" {...containerStyle}>
        {label && <Label>{label}</Label>}
        <StyledInput
          ref={ref}
          hasLabel={!!label}
          value={String(field.value)}
          onChangeText={field.onChange}
          {...rest}
        />
        {isShowError && <ErrorMessage pos="absolute" bottom={-20} error={errors[name]} />}
      </Stack>
    )
  }
)

export default memo(Input, isEqual)
