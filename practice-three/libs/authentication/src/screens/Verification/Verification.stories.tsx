import type { Meta, StoryObj } from '@storybook/react'

import Verification from './index'

const meta: Meta<typeof Verification> = {
  component: Verification,
  title: 'screens/Verification',
}

export default meta

type Story = StoryObj<typeof Verification>

export const Default: Story = {
  args: {},
}
