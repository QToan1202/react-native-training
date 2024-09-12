import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'components/Avatar',
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: { image: 'https://images.unsplash.com/photo-1724010930544-59b11726a226' },
}
