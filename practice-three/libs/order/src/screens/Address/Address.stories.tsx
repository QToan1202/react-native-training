import type { Meta, StoryObj } from '@storybook/react'

import Address from './Address'

const meta: Meta<typeof Address> = {
  component: Address,
  title: 'screens/Address',
}

export default meta

type Story = StoryObj<typeof Address>

export const Default: Story = {
  args: {},
}
