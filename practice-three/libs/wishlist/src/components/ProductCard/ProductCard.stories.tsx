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
    images: [''],
    price: 345,
    discountPercent: 30,
    brandName: 'Channel',
    rating: 4.4,
    // description: 'Lorem',
    // sellerName: 'Seller A',
    // sizes: ['s', 'm', 'l', 'xl'],
    // reviews: [
    //   { content: 'good product', reviewer: 'A', date: new Date('12-12-2002'), rating: 4.4 },
    // ],
    // specifications: {
    //   type: 'denim jacket',
    //   color: 'spread color',
    //   sleeveLength: 'long sleeves',
    //   patternType: 'washed',
    //   length: 'regular',
    //   closure: 'button',
    //   liningFabric: 'unlined',
    //   numOfPockets: 4,
    //   hemline: 'straight',
    //   occasion: 'casual',
    // },
  },
}
