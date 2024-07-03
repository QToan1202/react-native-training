import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters } from 'storybook-addon-remix-react-router'

import Search from './Search'

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'screens/Search',
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/search',
      },
    }),
  },
}

export default meta

type Story = StoryObj<typeof Search>

export const Default: Story = {
  args: {},
}
