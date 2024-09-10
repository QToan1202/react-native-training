import type { Meta, StoryObj } from '@storybook/react'

import Rating from './Rating'

const meta: Meta<typeof Rating> = {
  component: Rating,
  title: 'components/Rating',
}

export default meta

type Story = StoryObj<typeof Rating>

export const Default: Story = {
  args: {
    numberOfStarts: 5,
  },
}

export const DisableRating: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
}
