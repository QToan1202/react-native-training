import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters } from 'storybook-addon-remix-react-router'

import Register from './Register'

const meta: Meta<typeof Register> = {
  component: Register,
  title: 'screens/Register',
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/register',
      },
    }),
  },
}

export default meta

type Story = StoryObj<typeof Register>

export const Default: Story = {
  args: {},
}
