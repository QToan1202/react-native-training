import type { Meta, StoryObj } from '@storybook/react'
import Placeholder from './Placeholder'

const meta: Meta<typeof Placeholder> = {
  component: Placeholder,
  title: 'components/Cart Item Placeholder',
}

export default meta

type Story = StoryObj<typeof Placeholder>

export const Default: Story = {
  args: {},
}
