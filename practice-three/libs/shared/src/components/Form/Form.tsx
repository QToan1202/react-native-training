import React, { ReactElement } from 'react'
import { DefaultValues, SubmitHandler, useForm } from 'react-hook-form'
import { Form as TForm, FormProps as TFormProps } from 'tamagui'

import { InputProps } from '../Input'
import { Button } from '../Button'
import { TFormValues } from '../../types'

export interface FormProps extends Omit<TFormProps, 'onSubmit'> {
  children: ReactElement<InputProps> | Array<ReactElement<InputProps>>
  defaultValues?: DefaultValues<TFormValues>
  submitTitle?: string
  onSubmit: SubmitHandler<Partial<TFormValues>>
}

const Form = ({
  defaultValues,
  children,
  submitTitle = 'submit',
  onSubmit,
  ...rest
}: FormProps) => {
  const { handleSubmit, register } = useForm({ defaultValues })

  return (
    <TForm onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children)
        ? children.map((child) =>
            child.props.label
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
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
