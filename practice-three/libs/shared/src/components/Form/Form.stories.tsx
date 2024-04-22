import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import FormFrame from './Form'
import { Input } from '../Input'

const meta: Meta<typeof FormFrame> = {
  component: FormFrame,
  title: 'components/Form',
}

export default meta

type Story = StoryObj<typeof FormFrame>
const FormWithInputs = (
  <FormFrame onSubmit={action('submit')}>
    <Input label="email" />
    <Input label="phone" />
  </FormFrame>
)

export const Default: Story = {
  render: () => FormWithInputs,
}
