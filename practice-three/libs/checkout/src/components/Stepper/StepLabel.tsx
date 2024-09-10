import { ReactNode, useContext } from 'react'
import { useWindowDimensions } from 'react-native'

import { Text, TextProps } from '@practice-three/shared/ui'

import { StepperContext } from './Stepper'

export type StepLabelProps = TextProps & {
  children: ReactNode
}

const StepLabel = ({ children, ...rest }: StepLabelProps) => {
  const { width } = useWindowDimensions()
  const { numberOfChildren } = useContext(StepperContext)

  return (
    <Text
      maxWidth={width / numberOfChildren}
      color="$pure_black"
      fontSize="$1"
      textTransform="capitalize"
      textAlign="center"
      {...rest}
    >
      {children}
    </Text>
  )
}

export default StepLabel
