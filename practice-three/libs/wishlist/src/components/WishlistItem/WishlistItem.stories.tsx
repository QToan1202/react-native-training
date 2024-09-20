import type { Meta, StoryObj } from '@storybook/react'
import WishlistItem from './WishlistItem'

const meta: Meta<typeof WishlistItem> = {
  component: WishlistItem,
  title: 'components/Wishlist Item',
}

export default meta

type Story = StoryObj<typeof WishlistItem>

export const Default: Story = {
  args: {
    image: '',
    name: 'printed shirt',
    brandName: 'gucci',
    price: 20,
  },
}
