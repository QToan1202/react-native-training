import type { Meta, StoryObj } from '@storybook/react'

import Register from './index'

const meta: Meta<typeof Register> = {
  component: Register,
  title: 'screens/Register',
}

export default meta

type Story = StoryObj<typeof Register>

export const Default: Story = {
  args: {},
}
