import { Control, FieldValues, Path, useController, UseControllerProps } from 'react-hook-form'

import Select, { SelectProps } from './Select'

export type ControlSelectProps<T extends FieldValues> = SelectProps & {
  label: Path<T>
  control?: Control<T>
  options?: UseControllerProps['rules']
}

const ControllerSelect = <T extends FieldValues>({
  control,
  label,
  options,
  ...rest
}: ControlSelectProps<T>) => {
  const {
    field: { value, onChange, ref },
  } = useController<T>({
    control,
    name: label,
    rules: options,
  })
  return <Select {...rest} label={label} value={value} onValueChange={onChange} ref={ref} />
}

export default ControllerSelect
