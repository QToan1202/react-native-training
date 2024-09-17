import { ReactNode, useContext, useMemo } from 'react'
import { View, XStack, YStack, YStackProps } from 'tamagui'

import { Text } from '@practice-three/shared/ui'

import { StepperContext, TInjectProps } from './Stepper'
import { ActiveStep } from '../../assets/images'

export type StepProps = YStackProps &
  Partial<TInjectProps> & {
    icon?: ReactNode
    children?: ReactNode
  }

const Step = ({ icon, children, index = -1, isLastStep, ...rest }: StepProps) => {
  const { activeStep, connector } = useContext(StepperContext)
  const renderStepIcon = useMemo(
    () =>
      icon || (
        <View
          width={24}
          aspectRatio={1}
          borderRadius={100}
          backgroundColor="$pure_white"
          borderWidth={1}
          borderColor="$primary"
          justifyContent="center"
          overflow="hidden"
        >
          <Text textAlign="center">{index + 1}</Text>
        </View>
      ),
    [icon, index]
  )

  return (
    <XStack alignItems="center" justifyContent="center" flexGrow={1} flexBasis={0} {...rest}>
      <YStack alignItems="center" zIndex="$step" rowGap={8}>
        {activeStep >= index ? <ActiveStep /> : renderStepIcon}
        {children}
      </YStack>
      {connector && !isLastStep ? connector : null}
    </XStack>
  )
}

export default Step
