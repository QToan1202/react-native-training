import { ReactNode } from 'react'
import { YStack, YStackProps } from 'tamagui'

import { Text } from '@shared/components'
import { Circle } from '../../assets/images'

export type StepperItemProps = YStackProps & {
  label: string
  icon?: ReactNode
}

const StepperItem = ({ icon = <Circle />, label, ...rest }: StepperItemProps) => (
  <YStack alignItems="center" {...rest}>
    {icon}
    <Text color="$pure_black" fontSize="$1" textTransform="capitalize">
      {label}
    </Text>
  </YStack>
)

export default StepperItem
