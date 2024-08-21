import type { Meta, StoryObj } from '@storybook/react'

import Unavailable from './Unavailable'

const meta: Meta<typeof Unavailable> = {
  component: Unavailable,
  title: 'screens/Unavailable',
}

export default meta

type Story = StoryObj<typeof Unavailable>

export const Default: Story = {
  args: {},
}
