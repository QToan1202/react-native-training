import { Controller, FieldValues, Path, PathValue, UseControllerProps } from 'react-hook-form'

import Checkbox, { CheckboxProps } from './Checkbox'

export type ControllerCheckbox<T extends FieldValues> = Omit<CheckboxProps, 'onCheckedChange'> &
  UseControllerProps<T>

const ControllerCheckbox = <T extends FieldValues>({
  name,
  control,
  label,
  disabled,
  rules,
  shouldUnregister,
  ...rest
}: ControllerCheckbox<T>) => (
  <Controller
    defaultValue={false as PathValue<T, boolean & Path<T>>}
    name={name}
    control={control}
    disabled={disabled}
    rules={rules}
    shouldUnregister={shouldUnregister}
    render={({ field: { value, onChange, ...restFieldProps } }) => (
      <Checkbox
        label={label}
        checked={value}
        onCheckedChange={onChange}
        {...restFieldProps}
        {...rest}
      />
    )}
  />
)

export default ControllerCheckbox
