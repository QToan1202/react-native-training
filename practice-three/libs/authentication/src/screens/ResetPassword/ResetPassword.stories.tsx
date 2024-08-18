import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters } from 'storybook-addon-remix-react-router'

import ResetPassword from './index'

const meta: Meta<typeof ResetPassword> = {
  component: ResetPassword,
  title: 'screens/Reset Password',
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/reset-password',
      },
    }),
  },
}

export default meta

type Story = StoryObj<typeof ResetPassword>

export const Default: Story = {
  args: {},
}
