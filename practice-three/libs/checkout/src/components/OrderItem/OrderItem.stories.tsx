import type { Meta, StoryObj } from '@storybook/react'

import OrderItem from './OrderItem'
const meta: Meta<typeof OrderItem> = {
  component: OrderItem,
  title: 'components/Order Item',
}

export default meta

type Story = StoryObj<typeof OrderItem>

export const Default: Story = {
  args: {
    id: '124-5660-9008',
    image:
      'https://media.karousell.com/media/photos/products/2023/9/17/clothe_1694974790_7533b5a7_progressive.jpg',
    name: 'Wine Halter Bow Skater Dress',
    brandName: 'New York',
    receiver: 'jane doe',
    quantity: 1,
    price: 299.43,
    date: '2024-11-15T23:59:59Z',
  },
}
