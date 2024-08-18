import { ReactNode } from 'react'
import { Square, XStack, XStackProps } from 'tamagui'

import { Text } from '@practice-three/components'

export type PaymentItemProps = XStackProps & {
  icon: ReactNode
  label: string
  isSelected?: boolean
}

const PaymentItem = ({ icon, label, isSelected = false, ...rest }: PaymentItemProps) => (
  <XStack
    justifyContent="center"
    alignItems="center"
    gap={20}
    paddingVertical={18}
    paddingHorizontal={20}
    {...(isSelected && { backgroundColor: '$pale' })}
    {...rest}
  >
    <Square>{icon}</Square>
    <Text color="$blue_100" fontWeight="700">
      {label}
    </Text>
  </XStack>
)

export default PaymentItem
