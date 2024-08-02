import { Separator, XStack, YStack, YStackProps } from 'tamagui'

import { ReactNode } from 'react'

export type StepperProps = YStackProps & {
  children: ReactNode
}

const Stepper = ({ children, ...rest }: StepperProps) => (
  <YStack position="relative" {...rest}>
    <Separator
      position="absolute"
      top={12}
      left={1}
      right={1}
      zIndex={2}
      borderColor="$primary"
      borderWidth={2}
    />
    <XStack justifyContent="space-between" alignItems="center">
      {children}
    </XStack>
  </YStack>
)

export default Stepper
