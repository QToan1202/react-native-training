import type { Meta, StoryObj } from '@storybook/react'

import Stepper from './Stepper'
import Step from './Step'
import StepLabel from './StepLabel'

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: 'components/Stepper',
}

export default meta

type Story = StoryObj<typeof Stepper>

const stepLabels = ['Cart', 'Address', 'Payment', 'Summary']

export const Default: Story = {
  args: {
    children: stepLabels.map((label: string) => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    )),
  },
}
