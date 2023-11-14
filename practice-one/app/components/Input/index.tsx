import { forwardRef, memo, useCallback, useState } from 'react'
import isEqual from 'react-fast-compare'
import { StyleProp, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import { Control, UseControllerProps, useController } from 'react-hook-form'

import Paragraph from '@components/Paragraph'
import ErrorMessage from '@components/ErrorMessage'
import { IForm } from '@types'

import styles from './styles'

export interface InputProps extends TextInputProps {
  label?: string
  name: keyof IForm
  control: Control<IForm>
  rules?: UseControllerProps['rules']
  isShowError?: boolean
  containerStyle?: StyleProp<ViewStyle>
}

const Input = forwardRef<TextInput, InputProps>(
  ({ label, name, control, rules, isShowError = false, style, containerStyle, ...rest }, ref) => {
    const {
      field,
      formState: { errors },
    } = useController<IForm>({
      control,
      defaultValue: '',
      name,
      rules,
    })
    const [isFocus, setIsFocus] = useState(false)
    const handleFocus = useCallback(() => setIsFocus(true), [])
    const handleBlur = useCallback(() => setIsFocus(false), [])

    return (
      <View style={containerStyle}>
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
            isFocus && label ? styles.inputFocus : {}, // Change style of the input that have label when focus
            style,
          ]}
          value={String(field.value)}
          onChangeText={field.onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
        {isShowError && <ErrorMessage error={errors[name]} />}
      </View>
    )
  }
)

export default memo(Input, isEqual)