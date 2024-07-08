import type { Meta, StoryObj } from '@storybook/react'
import Skeleton from './Skeleton'

import { Text } from '../Text'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'components/Skeleton',
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {
    children: <Text>123</Text>,
  },
}

export const SkeletonWithVariants: Story = {
  args: {
    variants: 'circular',
    children: <Text>123</Text>,
  },
}
