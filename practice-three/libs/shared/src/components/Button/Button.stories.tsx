import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ShoppingCart } from '@tamagui/lucide-icons'

import Button from './HOCBtn'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'components/Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    title: 'click me',
    startIcon: <ShoppingCart />,
    onPress: action('press'),
  },
}

export const CustomTextButton: Story = {
  args: {
    title: 'click me',
    variant: 'outlined',
    color: '$red_100',
    fontWeight: '700',
    fontSize: '$4',
    onPress: action('press'),
  },
}

export const DisableButton: Story = {
  args: {
    title: 'add to cart',
    variant: 'outlined',
    isDisable: true,
    onPress: action('wont-fire'),
  },
}

export const LoadingButton: Story = {
  args: {
    title: 'add to cart',
    loading: true,
  },
}

export const LoadingButtonWithIcon: Story = {
  args: {
    title: 'add to cart',
    loading: true,
    startIcon: <ShoppingCart size={32} />,
    onPress: action('wont-fire'),
  },
}
