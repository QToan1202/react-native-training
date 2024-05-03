import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters } from 'storybook-addon-remix-react-router'

import Verification from './index'

const meta: Meta<typeof Verification> = {
  component: Verification,
  title: 'screens/Verification',
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/verification',
      },
    }),
  },
}

export default meta

type Story = StoryObj<typeof Verification>

export const Default: Story = {
  args: {},
}
