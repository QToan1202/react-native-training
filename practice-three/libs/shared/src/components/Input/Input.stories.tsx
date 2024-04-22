import type { Meta, StoryObj } from '@storybook/react'
import { UseControllerProps, useForm } from 'react-hook-form'

import Input, { InputProps } from './Input'
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
}: Omit<InputProps, 'label' | 'control'>) => {
  const { control } = useForm<TFormValues>()

  return (
    <Input
      label="email"
      control={control}
      options={{ ...{ required: true }, options } as UseControllerProps['rules']}
      {...restProps}
    />
  )
}

export const Default: Story = {
  render: () => <UncontrolledInput />,
}
