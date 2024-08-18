import type { Meta, StoryObj } from '@storybook/react'
import Input, { InputProps } from './Input'
import { RegisterOptions, useForm } from 'react-hook-form'
import { TFormValues } from '../../types'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'components/Input',
}

export default meta
type Story = StoryObj<typeof Input>

const UncontrolledInput = ({
  options = {},
  ...restProps
}: Omit<InputProps, 'label' | 'register'>) => {
  const { register } = useForm<TFormValues>()

  return (
    <Input
      label="email"
      register={register}
      options={{ ...{ required: true }, options } as RegisterOptions<TFormValues>}
      {...restProps}
    />
  )
}

export const Default: Story = {
  render: () => <UncontrolledInput />,
}
