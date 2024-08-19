import type { Meta, StoryObj } from '@storybook/react'

import ProfileScreen from './Profile'

const meta: Meta<typeof ProfileScreen> = {
  component: ProfileScreen,
  title: 'screens/Profile',
}

export default meta

type Story = StoryObj<typeof ProfileScreen>

export const Default: Story = {
  args: {},
}
