import type { Meta, StoryObj } from '@storybook/react'
import AlertDialog from './AlertDialog'

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: 'components/Alert Dialog',
}

export default meta

type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  args: {
    open: true,
    title: 'Accept',
    description: 'By pressing yes, you accept our terms and conditions.',
  },
}
