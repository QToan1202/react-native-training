import type { Meta, StoryObj } from '@storybook/react'

import Order from './Order'

const meta: Meta<typeof Order> = {
  component: Order,
  title: 'screens/Order',
}

export default meta

type Story = StoryObj<typeof Order>

export const Default: Story = {
  args: {},
}
