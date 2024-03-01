import { StyleSheet } from 'react-native'
import { GetProps, RadioGroup, styled } from 'tamagui'

import { COLORS } from '@practice-two/shared'

const styles = StyleSheet.create({
  normal: {
    borderColor: COLORS.RADIO_NORMAL,
  },
  selected: {
    borderColor: COLORS.RADIO_ACTIVE,
  },
})

export const StyledItem = styled(RadioGroup.Item, {
  unstyled: true,
  value: '',
  id: undefined,
  justifyContent: 'center',
  alignItems: 'center',
  width: '$radio.frame',
  height: '$radio.frame',
  borderRadius: '$radius.12',
  borderWidth: '$space.0.5',
})

export type StyledItemProps = GetProps<typeof StyledItem>

export const StyledIndicator = styled(RadioGroup.Indicator, {
  unstyled: true,
  width: '$radio.indicator',
  height: '$radio.indicator',
  backgroundColor: '$color.radio_active',
  borderRadius: '$radius.12',
})

export type StyledIndicatorProps = GetProps<typeof StyledIndicator>

export default styles
