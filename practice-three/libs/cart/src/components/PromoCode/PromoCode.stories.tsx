import type { Meta, StoryObj } from '@storybook/react'
import PromoCode from './PromoCode'

const meta: Meta<typeof PromoCode> = {
  component: PromoCode,
  title: 'components/Promo Code',
}

export default meta

type Story = StoryObj<typeof PromoCode>

export const Default: Story = {
  args: {
    id: 'sumr',
    code: 'summer2024',
    name: 'Summer Sale',
    description: 'Get 20% off on all summer products!',
    discountPercentage: 20,
    validFrom: '2024-07-01T00:00:00Z',
    validTo: '2024-09-01T23:59:59Z',
    minimumPurchaseAmount: 50,
  },
}
