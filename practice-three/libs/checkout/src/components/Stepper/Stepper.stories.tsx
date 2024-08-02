import type { Meta, StoryObj } from '@storybook/react'

import Stepper from './Stepper'
import StepperItem from './StepperItem'

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: 'components/Stepper',
}

export default meta

type Story = StoryObj<typeof Stepper>

export const Default: Story = {
  args: {
    children: (
      <>
        <StepperItem label="Cart" />
        <StepperItem label="Address" />
        <StepperItem label="Payment" />
        <StepperItem label="Summary" />
      </>
    ),
  },
}
