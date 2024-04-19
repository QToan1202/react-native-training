import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ShoppingCart } from '@tamagui/lucide-icons'

import IconButton from './IconButton'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'components/Icon Button',
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    children: <ShoppingCart />,
    scaleIconSize: 1,
    onPress: action('press'),
  },
}
