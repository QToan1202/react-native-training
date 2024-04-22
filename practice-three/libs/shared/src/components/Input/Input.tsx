import { Control, Path, UseControllerProps, useController } from 'react-hook-form'

import StyledInput, { StyledInputProps } from './StyledInput'
import { TFormValues } from '../../types'

export type InputProps = StyledInputProps & {
  label: Path<TFormValues>
  control: Control<TFormValues>
  options?: UseControllerProps['rules']
}

const Input = ({ label, options, control, ...rest }: InputProps) => {
  const { field } = useController<TFormValues>({
    control,
    defaultValue: '',
    name: label,
    rules: options,
  })

  return (
    <StyledInput
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      {...rest}
    />
  )
}

export default Input
