import { ReactElement } from 'react'
import {
  Picker as NativePicker,
  PickerProps as NativePickerProps,
} from '@react-native-picker/picker'

import { PickerItemProps } from './PickerItem'
import styles from './styles'

export interface PickerProps extends NativePickerProps {
  children: ReactElement<PickerItemProps> | ReactElement<PickerItemProps>[]
  selectedValue: string
  androidMode?: NativePickerProps['mode']
  onValueChange: NativePickerProps['onValueChange']
}

const Picker = ({
  children,
  selectedValue,
  androidMode = 'dropdown',
  onValueChange,
  ...rest
}: PickerProps) => {
  return (
    <NativePicker
      style={styles.picker}
      mode={androidMode}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      {...rest}
    >
      {children}
    </NativePicker>
  )
}

export default Picker
