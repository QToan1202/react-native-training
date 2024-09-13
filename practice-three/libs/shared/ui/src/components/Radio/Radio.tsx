import { ReactNode, useState } from 'react'
import { RadioGroup, RadioGroupProps } from 'tamagui'
import { createStore } from 'zustand'

import { RadioAction, RadioContext, RadioState } from './useRadio'

export type RadioProps = RadioGroupProps & {
  children: ReactNode
}

const Radio = ({ defaultValue, children, onValueChange, ...rest }: RadioProps) => {
  const [radioStore] = useState(() =>
    createStore<RadioState & RadioAction>()((set) => ({
      value: defaultValue,
      onChangeValue: (value) => set({ value }),
    }))
  )
  const handleValueChange = (value: string) => {
    // Run the onChange fn that pass through props
    onValueChange?.(value)

    // Run the setter fn from the useRadio hook
    // so that the RadioItem component can detected change value
    radioStore.getState().onChangeValue(value)
  }

  return (
    <RadioContext.Provider value={radioStore}>
      <RadioGroup onValueChange={handleValueChange} {...rest}>
        {children}
      </RadioGroup>
    </RadioContext.Provider>
  )
}

export default Radio
