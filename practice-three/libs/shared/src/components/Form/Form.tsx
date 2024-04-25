import React, { ReactNode } from 'react'
import { FieldValues, SubmitHandler, UseFormProps, useForm } from 'react-hook-form'
import { Form as TForm, FormProps as TFormProps, withStaticProperties } from 'tamagui'

export type FormProps<T extends FieldValues> = Omit<TFormProps, 'onSubmit'> & {
  children: ReactNode
  formProps?: UseFormProps<T>
  onSubmit: SubmitHandler<T>
}

const FormFrame = <T extends FieldValues>({
  children,
  formProps = {},
  onSubmit,
  ...rest
}: FormProps<T>) => {
  const { handleSubmit, register, control } = useForm<T>(formProps)

  return (
    <TForm onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children)
        ? children.map((child) =>
            child.props.label
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
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
