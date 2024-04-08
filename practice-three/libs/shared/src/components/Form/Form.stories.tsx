import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Form from './Form'
import { Input } from '../Input'

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'components/Form',
}

export default meta

type Story = StoryObj<typeof Form>
const FormWithInputs = (
  <Form onSubmit={action('submit')}>
    <Input label="email" />
    <Input label="phone" />
  </Form>
)

export const Default: Story = {
  render: () => FormWithInputs,
}
