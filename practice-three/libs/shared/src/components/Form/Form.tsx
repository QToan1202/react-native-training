import React, { ReactNode } from 'react'
import { Control, FieldValues } from 'react-hook-form'
import { Form as TForm, FormProps as TFormProps, withStaticProperties } from 'tamagui'

export type FormProps<T extends FieldValues> = TFormProps & {
  children: ReactNode
  formControlProp: Control<T>
}

const FormFrame = <T extends FieldValues>({
  children,
  formControlProp: control,
  ...rest
}: FormProps<T>) => {
  return (
    <TForm {...rest}>
      {Array.isArray(children)
        ? children.map((child) =>
            child.props.label
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    control,
                    key: child.props.label,
                  },
                })
              : child
          )
        : children}
    </TForm>
  )
}

const Form = withStaticProperties(FormFrame, {
  Trigger: TForm.Trigger,
})

export default Form
