import { Check } from '@tamagui/lucide-icons'
import { Checkbox as TCheckbox, Label, XStack, CheckboxProps as TCheckboxProps } from 'tamagui'

export type CheckboxProps = TCheckboxProps & {
  label: string
}

const Checkbox = ({ label, ...rest }: CheckboxProps) => (
  <XStack alignItems="center" gap="$3">
    <TCheckbox
      size="$4"
      backgroundColor="$transparent"
      borderWidth={2}
      borderColor="$gray_100"
      pressStyle={{ backgroundColor: '$gray_100' }}
      $platform-web={{ borderRadius: 0 }}
      $platform-native={{ borderRadius: 5 }}
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

export default Checkbox
