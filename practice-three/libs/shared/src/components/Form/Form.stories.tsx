import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { useForm } from 'react-hook-form'

import FormFrame from './Form'
import { Input } from '../Input'
import { TLoginForm } from '../../types/form'
import { Button } from '../Button'

const meta: Meta<typeof FormFrame> = {
  component: FormFrame,
  title: 'components/Form',
}

export default meta

type Story = StoryObj<typeof FormFrame>
const FormWithInputs = () => {
  const { control, handleSubmit } = useForm<TLoginForm>()

  return (
    <FormFrame formControlProp={control} onSubmit={handleSubmit(action('submit'))}>
      <Input />
      <Input />

      <FormFrame.Trigger asChild="web">
        <Button title="press" />
      </FormFrame.Trigger>
    </FormFrame>
  )
}

export const Default: Story = {
  render: () => <FormWithInputs />,
}
