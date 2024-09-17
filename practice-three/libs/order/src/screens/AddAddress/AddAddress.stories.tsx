import type { Meta, StoryObj } from '@storybook/react'

import AddAddress from './AddAddress'

const meta: Meta<typeof AddAddress> = {
  component: AddAddress,
  title: 'screens/Add Address',
}

export default meta

type Story = StoryObj<typeof AddAddress>

export const Default: Story = {
  args: {},
}
