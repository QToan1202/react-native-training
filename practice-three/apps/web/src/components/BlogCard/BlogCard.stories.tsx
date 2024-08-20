import type { Meta, StoryObj } from '@storybook/react'

import BlogCard from './BlogCard'

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
  title: 'components/Blog Card',
}

export default meta

type Story = StoryObj<typeof BlogCard>

export const Default: Story = {
  args: {
    title: 'Discover new way to decorate your home .',
    content: 'Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit ut ...',
    author: 'By Souha . H',
    image: 'https://images.unsplash.com/photo-1720048171731-15b3d9d5473f',
  },
}
