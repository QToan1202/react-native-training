import { useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Control, useController } from 'react-hook-form'

import Paragraph from '@components/Paragraph'
import { IForm } from '@types'

import styles from './styles'

export interface InputProps extends TextInputProps {
  label?: string
  name: keyof IForm
  control: Control<IForm>
}

const Input = ({ label, name, control, ...rest }: InputProps) => {
  const { field } = useController<IForm>({
    control,
    defaultValue: '',
    name,
  })
  const [isFocus, setIsFocus] = useState(false)
  const handleFocus = () => setIsFocus(true)
  const handleBlur = () => setIsFocus(false)

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
        style={[
          label ? styles.inputWithLabel : styles.input, // Style when an input have label or not
          isFocus && styles.inputFocus, // Change style of the input that have label when focus
        ]}
        value={field.value.toString()}
        onChangeText={field.onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </>
  )
}

export default Input
