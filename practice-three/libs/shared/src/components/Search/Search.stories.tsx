import type { Meta, StoryObj } from '@storybook/react'

import Search from './Search'

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'components/Search',
}

export default meta

type Story = StoryObj<typeof Search>

export const Default: Story = {
  args: {},
}
