import type { Meta, StoryObj } from '@storybook/react'

import ResetPassword from './index'

const meta: Meta<typeof ResetPassword> = {
  component: ResetPassword,
  title: 'screens/Reset Password',
}

export default meta

type Story = StoryObj<typeof ResetPassword>

export const Default: Story = {
  args: {},
}
