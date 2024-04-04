import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'components/Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: <Button.Text fontSize="$2">add to cart</Button.Text>,
  },
}

export const DisableBtn: Story = {
  args: {
    children: <Button.Text fontSize="$2">add to cart</Button.Text>,
    isDisable: true,
  },
}
