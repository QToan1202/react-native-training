import type { Meta, StoryObj } from '@storybook/react'

import PromoCode from './PromoCode'

const meta: Meta<typeof PromoCode> = {
  component: PromoCode,
  title: 'screens/Promo Code',
}

export default meta

type Story = StoryObj<typeof PromoCode>

export const Default: Story = {
  args: {},
}
