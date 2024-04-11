import { Select, SelectItemProps as TSelectItemProps } from 'tamagui'
import { Check } from '@tamagui/lucide-icons'

export type SelectItemProps = TSelectItemProps & {
  name: string
}

const SelectItem = ({ name, ...rest }: SelectItemProps) => (
  <Select.Item {...rest}>
    <Select.ItemText>{name}</Select.ItemText>
    <Select.ItemIndicator marginLeft="auto">
      <Check size={16} />
    </Select.ItemIndicator>
  </Select.Item>
)

export default SelectItem
