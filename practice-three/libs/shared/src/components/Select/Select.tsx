import { ReactElement } from 'react'
import { Adapt, Select, Sheet, YStack, SelectProps as TSelectProps, getTokenValue } from 'tamagui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'

import { SelectItemProps } from './SelectItem'

export type SelectProps = TSelectProps & {
  label: string
  children: ReactElement<SelectItemProps> | Array<ReactElement<SelectItemProps>>
  placeholder?: string
}

const SelectDemo = ({
  label,
  placeholder = 'Select value',
  native,
  children,
  ...rest
}: SelectProps) => {
  return (
    <Select disablePreventBodyScroll native={native} {...rest}>
      <Select.Trigger width={220} iconAfter={ChevronDown}>
        <Select.Value placeholder={placeholder} />
      </Select.Trigger>

      <Adapt when="xs" platform="touch">
        <Sheet native={!!native} modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={getTokenValue('$zIndex.selectContent') as number}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex="$1">
            <ChevronUp size={20} />
          </YStack>
        </Select.ScrollUpButton>

        <Select.Viewport minWidth={200}>
          <Select.Group>
            <Select.Label>{label}</Select.Label>
            {children}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex="$1">
            <ChevronDown size={20} />
          </YStack>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}

export default SelectDemo
