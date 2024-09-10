import type { Meta, StoryObj } from '@storybook/react'

import Radio from './Radio'
import RadioItem from './RadioItem'

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'components/Radio',
}

export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: () => (
    <Radio>
      <RadioItem value="1" />
      <RadioItem value="2" />
    </Radio>
  ),
}
