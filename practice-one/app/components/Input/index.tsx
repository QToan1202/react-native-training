import { forwardRef, useCallback, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Control, UseControllerProps, useController } from 'react-hook-form'

import Paragraph from '@components/Paragraph'
import { IForm } from '@types'

import styles from './styles'

export interface InputProps extends TextInputProps {
  label?: string
  name: keyof IForm
  control: Control<IForm>
  rules?: UseControllerProps['rules']
}

const Input = forwardRef<TextInput, InputProps>(
  ({ label, name, control, rules, style, ...rest }, ref) => {
    const { field } = useController<IForm>({
      control,
      defaultValue: '',
      name,
      rules,
    })
    const [isFocus, setIsFocus] = useState(false)
    const handleFocus = useCallback(() => setIsFocus(true), [])
    const handleBlur = useCallback(() => setIsFocus(false), [])

    return (
      <>
        {label && (
          <Paragraph
            size="sm"
            content={label}
            style={isFocus ? [styles.label, styles.labelFocus] : styles.label}
          />
        )}
        <TextInput
          ref={ref}
          style={[
            label ? styles.inputWithLabel : styles.input, // Style when an input have label or not
            isFocus && styles.inputFocus, // Change style of the input that have label when focus
            style,
          ]}
          value={String(field.value)}
          onChangeText={field.onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </>
    )
  }
)

export default Input
