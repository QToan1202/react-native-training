import type { Meta, StoryObj } from '@storybook/react'

import PaymentItem from './PaymentItem'
import { Bank } from '../../assets/images'

const meta: Meta<typeof PaymentItem> = {
  component: PaymentItem,
  title: 'components/Payment Item',
}

export default meta

type Story = StoryObj<typeof PaymentItem>

export const Default: Story = {
  args: {
    icon: <Bank />,
    label: 'Bank Transfer',
  },
}
