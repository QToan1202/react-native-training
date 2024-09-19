import { forwardRef, ReactElement } from 'react'
import {
  Adapt,
  Select as TSelect,
  Sheet,
  YStack,
  SelectProps as TSelectProps,
  getTokenValue,
  TamaguiElement,
} from 'tamagui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'

import { SelectItemProps } from './SelectItem'

export type SelectProps = TSelectProps & {
  label: string
  children: ReactElement<SelectItemProps> | Array<ReactElement<SelectItemProps>>
  placeholder?: string
  isError?: boolean
  disabled?: boolean
}

const Select = forwardRef<TamaguiElement, SelectProps>(
  (
    {
      label,
      placeholder = 'Select value',
      native,
      children,
      isError = false,
      disabled = false,
      ...rest
    },
    selectRef
  ) => {
    return (
      <TSelect disablePreventBodyScroll native={native} {...rest}>
        <TSelect.Trigger
          ref={selectRef}
          backgroundColor="$transparent"
          borderColor="$border"
          borderRadius={5}
          hoverStyle={{ backgroundColor: 'none', borderColor: '$primary' }}
          pressStyle={{ backgroundColor: '$gray_200', borderColor: '$primary' }}
          iconAfter={<ChevronDown color="$black" />}
          disabled={disabled}
          disabledStyle={{ backgroundColor: '$gray_50' }}
          {...(isError && { borderColor: '$red_50' })}
        >
          <TSelect.Value color="$black" placeholder={placeholder} />
        </TSelect.Trigger>

        <Adapt platform="touch">
          <Sheet
            native={!!native}
            modal
            dismissOnSnapToBottom
            snapPoints={[50, 50, 25]}
            snapPointsMode="percent"
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <TSelect.Content zIndex={getTokenValue('$zIndex.selectContent') as number}>
          <TSelect.ScrollUpButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex="$1">
              <ChevronUp size={20} color="$black" />
            </YStack>
          </TSelect.ScrollUpButton>

          <TSelect.Viewport>
            <TSelect.Group>
              <TSelect.Label color="$black" backgroundColor="$white">
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </TSelect.Label>
              {children}
            </TSelect.Group>
          </TSelect.Viewport>

          <TSelect.ScrollDownButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex="$1">
              <ChevronDown size={20} color="$black" />
            </YStack>
          </TSelect.ScrollDownButton>
        </TSelect.Content>
      </TSelect>
    )
  }
)

export default Select
