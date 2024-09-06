import type { Meta, StoryObj } from '@storybook/react'
import ProductCard from './ProductCard'

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  title: 'components/Product Card',
}

export default meta

type Story = StoryObj<typeof ProductCard>

export const Default: Story = {
  args: {
    name: 'What ever',
    image: '',
    price: 345,
    discountPercent: 30,
    brandName: 'Channel',
    rating: 4.4,
  },
}
