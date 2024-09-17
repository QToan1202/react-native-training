import type { Meta, StoryObj } from '@storybook/react'

import AddCard from './AddCard'

const meta: Meta<typeof AddCard> = {
  component: AddCard,
  title: 'screens/Add Card',
}

export default meta

type Story = StoryObj<typeof AddCard>

export const Default: Story = {
  args: {},
}
