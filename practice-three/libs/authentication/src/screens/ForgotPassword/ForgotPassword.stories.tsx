import type { Meta, StoryObj } from '@storybook/react'

import ForgotPassword from './index'

const meta: Meta<typeof ForgotPassword> = {
  component: ForgotPassword,
  title: 'screens/Forgot Password',
}

export default meta

type Story = StoryObj<typeof ForgotPassword>

export const Default: Story = {
  args: {},
}
