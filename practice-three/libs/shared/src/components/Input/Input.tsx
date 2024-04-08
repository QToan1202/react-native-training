import type { Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import StyledInput, { StyledInputProps } from './StyledInput'
import { TFormValues } from '../../types'

export type InputProps = StyledInputProps & {
  label: Path<TFormValues>
  register: UseFormRegister<TFormValues>
  options?: RegisterOptions<TFormValues>
}

const Input = ({ label, options, register, ...rest }: InputProps) => {
  return <StyledInput {...rest} {...register(label, options)} />
}

export default Input
