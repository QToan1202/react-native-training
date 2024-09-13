import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Slider from './Slider'

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'components/Slider',
}

export default meta

type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [0, 20],
    step: 5,
    max: 100,
    onValueChange: action('slider dragging'),
  },
}
