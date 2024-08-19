import type { Meta, StoryObj } from '@storybook/react'

import ProfileItem from './ProfileItem'

import { Bag } from '../../assets/images'

const meta: Meta<typeof ProfileItem> = {
  component: ProfileItem,
  title: 'components/Profile Item',
}

export default meta

type Story = StoryObj<typeof ProfileItem>

export const Default: Story = {
  args: {
    icon: <Bag />,
    title: 'My Orders',
  },
}
