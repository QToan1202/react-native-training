import type { Meta, StoryObj } from '@storybook/react'

import Payment from './Payment'

const meta: Meta<typeof Payment> = {
  component: Payment,
  title: 'screens/Payment',
}

export default meta

type Story = StoryObj<typeof Payment>

export const Default: Story = {
  args: {},
}
