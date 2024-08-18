import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters } from 'storybook-addon-remix-react-router'

import ForgotPassword from './index'

const meta: Meta<typeof ForgotPassword> = {
  component: ForgotPassword,
  title: 'screens/Forgot Password',
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/forgot-password',
      },
    }),
  },
}

export default meta

type Story = StoryObj<typeof ForgotPassword>

export const Default: Story = {
  args: {},
}
