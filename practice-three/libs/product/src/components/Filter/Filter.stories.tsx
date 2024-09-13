import type { Meta, StoryObj } from '@storybook/react'

import Comment from './Filter'

const meta: Meta<typeof Comment> = {
  component: Comment,
  title: 'components/Filter',
}

export default meta

type Story = StoryObj<typeof Comment>

export const Default: Story = {
  args: {},
}
