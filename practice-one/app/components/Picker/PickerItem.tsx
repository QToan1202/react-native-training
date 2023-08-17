import { Picker, PickerItemProps as NativePickerItemProps } from '@react-native-picker/picker'

export interface PickerItemProps extends NativePickerItemProps {
  label: string
  value: string | number
}

const PickerItem = ({ label, value, ...rest }: PickerItemProps) => {
  return <Picker.Item label={label} value={value} {...rest} />
}

export default PickerItem
