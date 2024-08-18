import { ReactNode } from 'react'
import { RadioGroup, RadioGroupProps } from 'tamagui'
import { useShallow } from 'zustand/react/shallow'

import useRadio from './useRadio'

export type RadioProps = RadioGroupProps & {
  children: ReactNode
}

const Radio = ({ children, onValueChange, ...rest }: RadioProps) => {
  const [value, setValue] = useRadio(useShallow((state) => [state.value, state.onChangeValue]))
  const handleValueChange = (value: string) => {
    // Run the onChange fn that pass through props
    onValueChange && onValueChange(value)

    // Run the setter fn from the useRadio hook
    // so that the RadioItem component can detected change value
    setValue(value)
  }

  return (
    <RadioGroup value={value} onValueChange={handleValueChange} {...rest}>
      {children}
    </RadioGroup>
  )
}

export default Radio
