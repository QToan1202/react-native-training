import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'components/Checkbox',
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => <Checkbox label="my checkbox" />,
}
