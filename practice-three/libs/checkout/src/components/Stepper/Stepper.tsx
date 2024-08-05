import { XStack, YStackProps } from 'tamagui'
import { cloneElement, createContext, ReactElement, ReactNode, useMemo, useState } from 'react'

import StepConnector from './StepConnector'
import getValidChildren from '../../utils'

export type StepperProps = YStackProps & {
  children: ReactNode
  activeStep?: number
  connector?: ReactNode
}

export type TInjectProps = {
  index: number
  isLastStep: boolean
}

type StepperContext = {
  numberOfChildren: number
  activeStep: number
  connector: ReactNode
}

export const StepperContext = createContext<StepperContext>({
  numberOfChildren: 0,
  activeStep: 0,
  connector: <StepConnector />,
})

const Stepper = ({
  children,
  activeStep = -1,
  connector = <StepConnector />,
  ...rest
}: StepperProps) => {
  const [validChildren] = useState(() => getValidChildren(children))
  const [numberOfChildren] = useState(() => validChildren.length)
  const val = useMemo(
    () => ({ numberOfChildren, activeStep, connector }),
    [activeStep, connector, numberOfChildren]
  )
  const steps = validChildren.map((step: ReactElement, index: number) => {
    return cloneElement(step, {
      index,
      isLastStep: index + 1 === numberOfChildren,
      ...step.props,
    })
  })

  return (
    <StepperContext.Provider value={val}>
      <XStack>{steps}</XStack>
    </StepperContext.Provider>
  )
}

export default Stepper
