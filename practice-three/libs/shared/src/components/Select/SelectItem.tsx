import { Select, SelectItemProps as TSelectItemProps } from 'tamagui'
import { Check } from '@tamagui/lucide-icons'

export type SelectItemProps = TSelectItemProps & {
  name: string
}

const SelectItem = ({ name, ...rest }: SelectItemProps) => (
  <Select.Item
    unstyled
    backgroundColor="$pure_white"
    borderTopColor="$border"
    borderTopWidth={1}
    {...rest}
  >
    <Select.ItemText textTransform="capitalize" color="$black">
      {name}
    </Select.ItemText>
    <Select.ItemIndicator marginLeft="auto">
      <Check size={16} color="black" />
    </Select.ItemIndicator>
  </Select.Item>
)

export default SelectItem
