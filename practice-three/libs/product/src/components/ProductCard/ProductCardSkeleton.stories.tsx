import type { Meta, StoryObj } from '@storybook/react'
import ProductCardSkeleton from './ProductCardSkeleton'

const meta: Meta<typeof ProductCardSkeleton> = {
  component: ProductCardSkeleton,
  title: 'components/Product Card Skeleton',
}

export default meta

type Story = StoryObj<typeof ProductCardSkeleton>

export const Default: Story = {
  args: {},
}
