import { ReactNode } from 'react'
import { RadioGroup, RadioGroupProps } from 'tamagui'
import { useShallow } from 'zustand/react/shallow'

import useRadio from './useRadio'

export type RadioProps = RadioGroupProps & {
  children: ReactNode
}

const Radio = ({ children, ...rest }: RadioProps) => {
  const [value, onChangeValue] = useRadio(useShallow((state) => [state.value, state.onChangeValue]))

  return (
    <RadioGroup value={value} onValueChange={onChangeValue} {...rest}>
      {children}
    </RadioGroup>
  )
}

export default Radio
