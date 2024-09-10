import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'
import { Lock } from '@practice-three/shared/asset'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'components/Input',
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    startIcon: <Lock />,
    endIcon: <Lock />,
  },
}
