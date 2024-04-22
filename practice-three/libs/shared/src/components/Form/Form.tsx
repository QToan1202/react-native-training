import React, { ReactNode } from 'react'
import { DefaultValues, FieldValues, SubmitHandler, UseFormProps, useForm } from 'react-hook-form'
import { Form as TForm, FormProps as TFormProps } from 'tamagui'

import { Button } from '../Button'
import { TFormValues } from '../../types'

export type FormProps<T extends FieldValues> = Omit<TFormProps, 'onSubmit'> & {
  children: ReactNode
  defaultValues?: DefaultValues<TFormValues>
  submitTitle?: string
  formProps?: UseFormProps<T>
  onSubmit: SubmitHandler<T>
}

const Form = <T extends FieldValues>({
  children,
  submitTitle = 'submit',
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

      <TForm.Trigger asChild="web">
        <Button title={submitTitle} />
      </TForm.Trigger>
    </TForm>
  )
}

export default Form
