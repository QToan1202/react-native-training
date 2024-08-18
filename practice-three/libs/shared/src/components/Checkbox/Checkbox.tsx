import { Check } from '@tamagui/lucide-icons'
import { forwardRef } from 'react'
import {
  Checkbox as TCheckbox,
  Label,
  XStack,
  CheckboxProps as TCheckboxProps,
  CheckedState,
  TamaguiElement,
} from 'tamagui'

export type CheckboxProps = TCheckboxProps & {
  label: string
  onChecked?: (label: string, checked: CheckedState) => void
}

const Checkbox = forwardRef<TamaguiElement, CheckboxProps>(
  ({ label, onCheckedChange, onChecked, ...rest }, ref) => {
    const hofOnCheckChange = (checked: CheckedState) => {
      onCheckedChange?.(checked)
      onChecked?.(label, checked)
    }

    return (
      <XStack alignItems="center" gap="$3">
        <TCheckbox
          size="$4"
          backgroundColor="$transparent"
          borderWidth={2}
          borderColor="$gray_100"
          pressStyle={{ backgroundColor: '$gray_100' }}
          focusStyle={{ borderColor: '$gray_100' }}
          $platform-web={{ borderRadius: 0 }}
          $platform-native={{ borderRadius: 5 }}
          onCheckedChange={hofOnCheckChange}
          ref={ref}
          {...rest}
        >
          <TCheckbox.Indicator>
            <Check size={14} color="$gray_200" />
          </TCheckbox.Indicator>
        </TCheckbox>

        <Label color="$gray_100" textTransform="capitalize">
          {label}
        </Label>
      </XStack>
    )
  }
)

export default Checkbox
