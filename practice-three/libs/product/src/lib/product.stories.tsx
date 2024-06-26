import type { Meta, StoryObj } from '@storybook/react'
import { Product } from './product'

const meta: Meta<typeof Product> = {
  component: Product,
  title: 'Product',
}
export default meta
type Story = StoryObj<typeof Product>

export const Primary = {
  args: {},
}
