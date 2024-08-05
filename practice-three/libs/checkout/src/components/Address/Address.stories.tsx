import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Address from './Address'
const meta: Meta<typeof Address> = {
  component: Address,
  title: 'components/Address',
}

export default meta

type Story = StoryObj<typeof Address>

export const Default: Story = {
  args: {
    id: 'address-id',
    name: 'jane doe',
    address: '52 Ridgewood Drive, SW. Saxton St. North Fort Myers, Henrico, VA 23228',
    phone: '91 9087654321',
    isSelected: true,
    onPress: action('press-card'),
  },
}
