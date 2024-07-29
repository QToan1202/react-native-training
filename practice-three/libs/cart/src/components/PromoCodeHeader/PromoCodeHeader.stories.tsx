import type { Meta, StoryObj } from '@storybook/react'
import PromoCodeHeader from './PromoCodeHeader'

const meta: Meta<typeof PromoCodeHeader> = {
  component: PromoCodeHeader,
  title: 'components/Promo Code Header',
}

export default meta

type Story = StoryObj<typeof PromoCodeHeader>

export const Default: Story = {
  args: {},
}
