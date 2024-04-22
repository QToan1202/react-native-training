import type { Meta, StoryObj } from '@storybook/react'

import Login from './index'

const meta: Meta<typeof Login> = {
  component: Login,
  title: 'screens/Login',
}

export default meta

type Story = StoryObj<typeof Login>

export const Default: Story = {
  args: {},
}
