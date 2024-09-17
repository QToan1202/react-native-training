import type { Meta, StoryObj } from '@storybook/react'
import CartItem from './CartItem'

const meta: Meta<typeof CartItem> = {
  component: CartItem,
  title: 'components/Cart Item',
}

export default meta

type Story = StoryObj<typeof CartItem>

export const Default: Story = {
  args: {
    image: '',
    name: 'printed shirt',
    price: 20,
    isLiked: false,
  },
}
