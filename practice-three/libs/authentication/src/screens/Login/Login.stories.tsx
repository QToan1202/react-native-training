import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters } from 'storybook-addon-remix-react-router'

import Login from './index'

const meta: Meta<typeof Login> = {
  component: Login,
  title: 'screens/Login',
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/login',
      },
    }),
  },
}

export default meta

type Story = StoryObj<typeof Login>

export const Default: Story = {
  args: {},
}
